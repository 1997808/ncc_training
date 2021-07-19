const { User } = require('../models/userSchema')

class UserServices {
  list = async () => {
    try {
      return await User.find({})
    } catch (err) {
      throw (err)
    }
  }

  findOne = async (username) => {
    try {
      return await User.findOne({ username: username })
    } catch (err) {
      throw (err)
    }
  }

  create = async (username, email, password, roles) => {
    try {
      const newUser = new User({
        username: username,
        email: email,
        password: password,
        roles: roles
      })
      return await newUser.save()
    } catch (err) {
      throw (err)
    }
  }

  delete = async (id) => {
    try {
      return await User.findOneAndDelete({ _id: id })
    } catch (err) {
      throw (err)
    }
  }

  update = async (id, username, email, password, roles) => {
    try {
      const newvalues = {
        $set: {
          username: username,
          email: email,
          password: password,
          roles: roles
        }
      }
      return await User.findOneAndUpdate({ _id: id }, newvalues)
    } catch (err) {
      throw (err)
    }
  }
}

const userServices = new UserServices()

module.exports = {
  userServices
}
