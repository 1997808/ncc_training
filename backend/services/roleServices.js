const { Role } = require('../models/roleSchema')

class RoleServices {
  list = async () => {
    try {
      return await Role.find({})
    } catch (err) {
      console.log(err)
    }
  }

  findOne = async (name) => {
    try {
      return await Role.findOne({ name: name })
    } catch (err) {
      console.log(err)
    }
  }

  create = async (name) => {
    try {
      console.log(name)
      const newRole = new Role({
        name: name,
      })
      return await newRole.save()
    } catch (err) {
      console.log(err)
    }
  }

  delete = async (id) => {
    try {
      return await Role.findOneAndDelete({ _id: id })
    } catch (err) {
      console.log(err)
    }
  }

  update = async (id, name) => {
    try {
      const newvalues = { $set: { name: name } }
      return await Role.findOneAndUpdate({ _id: id }, newvalues)
    } catch (err) {
      console.log(err)
    }
  }
}

const roleServices = new RoleServices()

module.exports = {
  roleServices
}
