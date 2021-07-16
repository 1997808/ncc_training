// Import the mongoose module
const mongoose = require('mongoose')

// Set up default mongoose connection
const url = 'mongodb://127.0.0.1/ncc_training'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log(err.reason))

// Get the default connection
exports.db = mongoose.connection
