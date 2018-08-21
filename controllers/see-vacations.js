const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Location = mongoose.model('Location')
// const Things2Do = mongoose.model('Things2Do')
// const Rating = mongoose.model('Rating')

// Sends user to the home page
router.get('/', (req, res) => {
  console.log('home is working')
})

// Shows user a list of vacation destinations
router.get('/see-vacations', (req, res) => {
  console.log('see vacations is working')
  Location.find({})
    .then(locations =>
      res.json(locations))
})

module.exports = router
