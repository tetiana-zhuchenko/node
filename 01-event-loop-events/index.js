const fs = require('fs')
const dns = require('dns')

function getInfo(text) {
  console.log(text, performance.now().toFixed(2))
}

console.log('Program start')

// Close events
fs.writeFile('./test.txt', 'Hello Node.js', () => getInfo('File written'))

// Promises
Promise.resolve().then(() => getInfo('Promise 1'))

// Next Tick
process.nextTick(() => getInfo('Next tick 1'))

// setImmediate
setImmediate(() => getInfo('Immediate 1'))

// Timeouts
setTimeout(() => getInfo('Timeout 1'), 0)
setTimeout(() => {
  process.nextTick(() => getInfo('Next tick 2'))
  getInfo('Timeout 2')
}, 100)

// Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
  getInfo(`Interval ${(intervalCount += 1)}`)
  if (intervalCount === 2) clearInterval(intervalId)
}, 50)

// I/O events
dns.lookup('localhost', (err, address, family) => {
  getInfo('DNS 1 localhost')
  Promise.resolve().then(() => getInfo('Promise 2'))
  process.nextTick(() => getInfo('Next tick 3'))
})

console.log('Program end')
