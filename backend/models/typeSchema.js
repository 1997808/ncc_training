const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
  name: String
})
// eslint-disable-next-line new-cap
const Type = new mongoose.model('Type', typeSchema)

module.exports = {
  Type
}
