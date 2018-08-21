const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Location = mongoose.model('Location')

// City show page
router.get('/api/helium/locations/:id', (req, res) => {
  console.log('city show page is working')
  Location.findById(req.params.id)
    .then((location) => {
      res.json(location)
    })
})

module.exports = router
