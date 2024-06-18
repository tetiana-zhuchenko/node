const fs = require('fs')

fs.writeFile('./first.txt', 'Hello from Node.js', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('first.txt was written')
    fs.appendFile('./first.txt', '\nAdded new data to first.txt', (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Appended text')
        fs.rename('./first.txt', './newFirst.txt', (err) => {
          if (err) {
            console.log(err)
          } else {
            console.log('File renamed')
          }
        })
      }
    })
  }
})
