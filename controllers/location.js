const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Location = mongoose.model('Location')

router.get('/cities', (req, res) => {
  Location.find({})
    .then(locations =>
      res.json(locations))
})

module.exports = router
