const mongoose = require('../models/Location')
const data = require('./data')

const Location = mongoose.model('Location')

Location.remove({})
  .then(_ => {
    Location.collection.insert(data)
      .then(locations => {
        console.log(data)
        process.exit()
      })
      .catch(err => {
        console.log(err)
      })
  })
