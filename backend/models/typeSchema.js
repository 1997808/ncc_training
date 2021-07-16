const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
  name: String
})
// eslint-disable-next-line new-cap
module.exports = new mongoose.model('Type', typeSchema)
