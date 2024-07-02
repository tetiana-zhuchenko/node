const express = require('express')

const PORT = 5000

const app = express()

app.get('/', (req, res) => res.send('Response from Express'))

app.listen(PORT, () => console.log(`Server was started on port ${PORT}`))
