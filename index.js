const express = require('express')
const parser = require('body-parser')

const app = express()

const vacationsController = require('./controllers/see-vacations.js')
const cityController = require('./controllers/city.js')
const things2doController = require('./controllers/things2do.js')

app.use(parser.json())

app.use('/', vacationsController)
app.use('/see-vacations', cityController)
app.use('/see-vacations/:id', things2doController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
