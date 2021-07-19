// const { db } = require('../configs/db')
const mongo = require('mongodb')
const { Item } = require('../models/itemSchema')

class ItemServices {
  list = async () => {
    try {
      return await Item.find({})
    } catch (err) {
      throw (err)
    }
  }

  findOne = async (id) => {
    try {
      return await Item.findOne({ _id: id })
    } catch (err) {
      throw (err)
    }
  }

  findOneByName = async (name) => {
    try {
      return await Item.findOne({ name: name })
    } catch (err) {
      throw (err)
    }
  }

  create = async (obj) => {
    try {
      return await Item.create(obj)
    } catch (err) {
      throw (err)
    }
  }

  delete = async (id) => {
    try {
      return await Item.findOneAndDelete({ _id: id })
    } catch (err) {
      throw (err)
    }
  }

  update = async (id, obj) => {
    try {
      const newvalues = { $set: { ...obj } }
      return await Item.findOneAndUpdate({ _id: id }, newvalues)
    } catch (err) {
      throw (err)
    }
  }
}

const itemServices = new ItemServices()

module.exports = {
  itemServices
}
