console.log("This is Express.JS Router server")

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is Express.JS Router server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
