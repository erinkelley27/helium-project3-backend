const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Location = mongoose.model('Location')

// City show page
// NEED TO ADD: Show all things to do that users have submitted for that city
// NEED TO ADD: Show rating
router.get('/:id', (req, res) => {
  console.log('city show page is working')
  Location.findById(req.params.id)
    .then((location) => {
      res.json(location)
    })
})

module.exports = router
