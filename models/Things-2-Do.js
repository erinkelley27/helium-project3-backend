const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Things2Do = new Schema({
  sightsee: String,
  restaurant: String,
  accommodation: String,
  image: String
})

mongoose.model('Things2Do', Things2Do)

module.exports = mongoose
