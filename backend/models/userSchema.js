const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
})
// eslint-disable-next-line new-cap
const User = new mongoose.model('User', userSchema)

module.exports = {
  User
}