import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const bodyParser = express.json()
const PORT = 2053

app.use(cors({ origin: '*' }))
app.use(bodyParser)

app.listen(PORT, () => {
  return console.log(`Server is listening on ${PORT}`)
})