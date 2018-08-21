const express = require('express')
const parser = require('body-parser')

const app = express()

const locationController = require('./controllers/location.js')
const things2doController = require('./controllers/location.js')

app.use(parser.json())

app.use('/', locationController)
app.use('/:city', things2doController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
