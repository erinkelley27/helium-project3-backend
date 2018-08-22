const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')

const app = express()

const vacationsController = require('./controllers/see-vacations.js')
const cityController = require('./controllers/city.js')
const things2doController = require('./controllers/things2do.js')
const userController = require('./controllers/user,js')

app.use(parser.json())
app.use(cors())
app.use(passport.initialize())

app.use('/', vacationsController)
app.use('/', cityController)
app.use('/', things2doController)
app.use('/', userController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
