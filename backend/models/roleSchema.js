const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
  name: String
})
// eslint-disable-next-line new-cap
const Role = new mongoose.model('Role', roleSchema)

module.exports = {
  Role
}