const concurrently = require('concurrently')
const express = require('express')
const bodyparser = require('body-parser')
const PORT = 400;

const app = express()

app.use(bodyparser)

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT)
  })