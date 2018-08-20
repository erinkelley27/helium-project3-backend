const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Location = mongoose.model('Location')

router.get('/locations', (req, res) => {
  console.log('hello world')
  Location.find({})
    .then(locations => {
      res.json(locations)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
