const express = require('express')
const router = express.Router()
const mongoose = require('../models/Location')
const Things2Do = mongoose.model('Things2Do')

// Render a list of all things to do within that city
router.get('/api/helium/things2do', (req, res) => {
  console.log('see things2do is working')
  Things2Do.find({})
    .then(things2do =>
      res.json(things2do))
})

// Create new thing to do method
router.post('/api/helium/', (req, res) => {
  Things2Do.create(req.body)
    .then((thing2do) => {
      res.json(thing2do)
    })
})

// Delete a thing to do
router.delete('/api/helium/things2do', (req, res) => {
  Things2Do.findOneAndRemove({})
    .then((thing2do) => {
      res.redirect('/')
    })
})
//Update a thing to do
router.put('/api/helium/things2do', (req,res)=> {
  const info = {
    city: req.body.sightsee,
    sightsee: req.body.sightsee,
    restaurant: req.body.restaurant,
    accommodation: req.body.accommodation,
    romanticPlace: req.body.romanticPlace,
    image: req.body.image
  };
  console.log(info)
  Things2Do.update({city: req.body.city}, info, function(err,result){
    if(err)
    res.send(err);
    res.send('Sucessful Update')
  })
})

module.exports = router
