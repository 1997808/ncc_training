const { Role } = require('../models/roleSchema')

class RoleServices {
  list = async () => {
    try {
      return await Role.find({})
    } catch (err) {
      throw (err)
    }
  }

  findOne = async (name) => {
    try {
      return await Role.findOne({ name: name })
    } catch (err) {
      throw (err)
    }
  }

  findMany = async (id) => {
    try {
      return await Role.find({ _id: id })
    } catch (err) {
      throw (err)
    }
  }

  create = async (name) => {
    try {
      const newRole = new Role({
        name: name,
      })
      return await newRole.save()
    } catch (err) {
      throw (err)
    }
  }

  delete = async (id) => {
    try {
      return await Role.findOneAndDelete({ _id: id })
    } catch (err) {
      throw (err)
    }
  }

  update = async (id, name) => {
    try {
      const newvalues = { $set: { name: name } }
      return await Role.findOneAndUpdate({ _id: id }, newvalues)
    } catch (err) {
      throw (err)
    }
  }
}

const roleServices = new RoleServices()

module.exports = {
  roleServices
}
