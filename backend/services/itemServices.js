const { Item } = require('../models/itemSchema')

class ItemServices {
  list = async () => {
    try {
      return await Item.find({})
    } catch (err) {
      console.log(err)
    }
  }

  findOne = async (id) => {
    try {
      return await Item.findOne({ _id: id })
    } catch (err) {
      console.log(err)
    }
  }

  findOneByName = async (name) => {
    try {
      return await Item.findOne({ name: name })
    } catch (err) {
      console.log(err)
    }
  }

  create = async (obj) => {
    try {
      return await Item.create(obj)
    } catch (err) {
      console.log(err)
    }
  }

  delete = async (id) => {
    try {
      return await Item.findOneAndDelete({ _id: id })
    } catch (err) {
      console.log(err)
    }
  }

  update = async (id, obj) => {
    try {
      const newvalues = { $set: { ...obj } }
      return await Item.findOneAndUpdate({ _id: id }, newvalues)
    } catch (err) {
      console.log(err)
    }
  }
}

const itemServices = new ItemServices()

module.exports = {
  itemServices
}
