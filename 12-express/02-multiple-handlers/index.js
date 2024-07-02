const express = require('express')

const PORT = 8080

const app = express()

const firstHandler = (req, res, next) => {
  console.log('first handler')
  next()
}
const secondHandler = (req, res) => {
  console.log('second handler')
  res.send('Response from Express')
}

app.get('/', firstHandler, secondHandler)

app.listen(PORT, () => console.log(`Server was started on port ${PORT}`))
