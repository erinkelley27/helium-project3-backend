const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Location = mongoose.model('Location')
const Things2Do = mongoose.model('Things2Do')
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

// Render form page - THIS IS NOT WORKING RIGHT NOW
router.get('/form', (req, res) => {
  console.log('form is working')
})

// Create new thing to do method
router.post('/:id', (req, res) => {
  Things2Do.create(req.body)
    .then((thing2do) => {
      res.json(thing2do)
    })
})

module.exports = router
