const { Type } = require('../models/typeSchema')

class TypeServices {
  list = async () => {
    try {
      return await Type.find({})
    } catch (err) {
      console.log(err)
    }
  }

  findOne = async (name) => {
    try {
      return await Type.findOne({ name: name })
    } catch (err) {
      console.log(err)
    }
  }

  create = async (name) => {
    try {
      const newType = new Type({
        name: name,
      })
      return await newType.save()
    } catch (err) {
      console.log(err)
    }
  }

  delete = async (id) => {
    try {
      return await Type.findOneAndDelete({ _id: id })
    } catch (err) {
      console.log(err)
    }
  }

  update = async (id, name) => {
    try {
      const newvalues = { $set: { name: name } }
      return await Type.findOneAndUpdate({ _id: id }, newvalues)
    } catch (err) {
      console.log(err)
    }
  }
}

const typeServices = new TypeServices()

module.exports = {
  typeServices
}
