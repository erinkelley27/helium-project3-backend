const express = require('express')
const parser = require('body-parser')

const app = express()

const locationController = require('./controllers/location.js')

app.use(parser.json())

app.use('/cities', locationController)

app.listen(3001, () => console.log('listening on port 3001'))
