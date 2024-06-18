const fs = require('fs/promises')

fs.writeFile('./first.txt', 'Hello from Node.js')
  .then(() => {
    console.log('first.txt was written')
  })
  .then(() => {
    fs.appendFile('./first.txt', '\nAdded new data to first.txt')
  })
  .then(() => {
    console.log('Appended text')
  })
  .then(() => {
    fs.rename('./first.txt', './newPromiseFirst.txt')
  })
  .then(() => {
    console.log('file was renamed')
  })
  .catch((err) => {
    if (err) {
      console.log(err)
    }
  })
