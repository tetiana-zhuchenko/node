const http = require('http')

const PORT = 5000

const server = http.createServer((req, res) => {
  console.log(req)
  res.statusCode = 200
  res.setHeader('')
  res.end('Greetings from HTTP server!')
})

server.listen(PORT, () => {
  console.log(`Server was launched on port ${PORT}`)
})
