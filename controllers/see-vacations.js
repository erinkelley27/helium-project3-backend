const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Location = mongoose.model('Location')

// Shows user a list of vacation destinations
router.get('/api/helium/locations', (req, res) => {
  console.log('see vacations is working')
  Location.find({})
    .then(locations =>
      res.json(locations))
})

module.exports = router
