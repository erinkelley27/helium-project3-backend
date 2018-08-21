const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Things2Do = mongoose.model('Things2Do')
// const Things2Do = mongoose.model('Things2Do')
// const Rating = mongoose.model('Rating')

// Render a list of all things to do within that city
router.get('/:id', (req, res) => {
  console.log('see things2do is working')
  Things2Do.find({})
    .then(things2do =>
      res.json(things2do))
})

// Create new thing to do method
router.post('/:id', (req, res) => {
  Things2Do.create(req.body)
    .then((thing2do) => {
      res.json(thing2do)
    })
})

// Delete a thing to do
router.delete('/:id', (req, res) => {
  Things2Do.findOneAndRemove({ _id: req.params.id })
    .then((thing2do) => {
      res.redirect('/')
    })
})

module.exports = router
