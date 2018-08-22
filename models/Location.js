const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Things2Do = new Schema({
  sightsee: String,
  restaurant: String,
  accommodation: String,
  romanticPlace: String,
  image: String
},
{ collection: 'things2do' }
)

const Rating = new Schema({
  heart: Number,
  brokenHeart: Number
},
{ collection: 'ratings' }
)

const Location = new Schema({
  city: String,
  tagline: String,
  image: String
},
{ collection: 'locations' }
)

mongoose.model('Things2Do', Things2Do)
mongoose.model('Rating', Rating)
mongoose.model('Location', Location)

module.exports = mongoose
