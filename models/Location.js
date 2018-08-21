const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Location = new Schema({
  city: String,
  tagline: String,
  image: String
},
{ collection: 'locations' }
)

mongoose.model('Location', Location)

module.exports = mongoose
