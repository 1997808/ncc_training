const { Type } = require('../models/typeSchema')

class TypeServices {
  list = async () => {
    try {
      return await Type.find({})
    } catch (err) {
      throw (err)
    }
  }

  findOne = async (name) => {
    try {
      return await Type.findOne({ name: name })
    } catch (err) {
      throw (err)
    }
  }

  create = async (name) => {
    try {
      const newType = new Type({
        name: name,
      })
      return await newType.save()
    } catch (err) {
      throw (err)
    }
  }

  delete = async (id) => {
    try {
      return await Type.findOneAndDelete({ _id: id })
    } catch (err) {
      throw (err)
    }
  }

  update = async (id, name) => {
    try {
      const newvalues = { $set: { name: name } }
      return await Type.findOneAndUpdate({ _id: id }, newvalues)
    } catch (err) {
      throw (err)
    }
  }
}

const typeServices = new TypeServices()

module.exports = {
  typeServices
}
