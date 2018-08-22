const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()

const vacationsController = require('./controllers/see-vacations.js')
const cityController = require('./controllers/city.js')
const things2doController = require('./controllers/things2do.js')

app.use(parser.json())
app.use(cors())

app.use('/', vacationsController)
app.use('/', cityController)
app.use('/', things2doController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
