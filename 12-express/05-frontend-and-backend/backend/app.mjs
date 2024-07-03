import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const PORT = 8080
const app = express()

// logs info about request
app.use(morgan('tiny'))
// converts JSON to JS Object in POST, PUT, PATCH, requests
app.use(express.json())
// converts form data to JS Object in POST, PUT, PATCH, requests
app.use(express.urlencoded({ extended: true }))
// enable all CORS requests
app.use(cors())

app.use((req, res) => {
  const personData = {
    name: 'Tania',
    isInstructor: true,
  }
  console.log(req.body)
  return res.json(personData)
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
