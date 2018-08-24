const mongoose = require('mongoose')

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MLAB_URL, {useMongoClient: true})
} else {
  mongoose.connect('mongodb://localhost/helium', {useMongoClient: true})
}

mongoose.Promise = Promise

// mongoose.connect('mongodb://localhost/helium')
//   .then(connection => console.log('connected!'))
//   .catch(err => console.log('connection failed!', err))

module.exports = mongoose
