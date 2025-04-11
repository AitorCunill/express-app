const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello wolrd 2.0!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})