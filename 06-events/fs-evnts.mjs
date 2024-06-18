import EventEmitter from 'events'
import fs from 'fs'

const fileEmitter = new EventEmitter()

fileEmitter.on('writeComplete', () => {
  console.log('first.txt was written')
  fs.appendFile('./first.txt', '\nAdded new data to first.txt', () => {
    fileEmitter.emit('appendComplete')
  })
})

fileEmitter.on('appendComplete', () => {
  console.log('Appended text')
  fs.rename('./first.txt', './newFirst.txt', () => {
    fileEmitter.emit('renameComplete')
  })
})

fileEmitter.on('renameComplete', () => {
  console.log('file was renamed')
})

fs.writeFile('./first.txt', 'Hello from Node.js', () => {
  fileEmitter.emit('writeComplete')
})
