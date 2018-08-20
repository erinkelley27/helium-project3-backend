const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Rating = new Schema({
  heart: Number,
  brokenHeart: Number
})

mongoose.model('Rating', Rating)

module.exports = mongoose
