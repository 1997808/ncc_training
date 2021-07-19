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
      return await Item.findOne({ _id: new mongo.ObjectId(id) })
    } catch (err) {
      throw (err)
    }
  }

  create = async (photo) => {
    try {
      return await Item.insertOne(photo)
    } catch (err) {
      throw (err)
    }
  }

  delete = async (id) => {
    try {
      return await Item.findOneAndDelete({ _id: new mongo.ObjectId(id) })
    } catch (err) {
      throw (err)
    }
  }

  update = async (id, name) => {
    try {
      const newvalues = { $set: { name: name } }
      return await Type.findOneAndUpdate({ _id: new mongo.ObjectId(id) }, newvalues)
    } catch (err) {
      throw (err)
    }
  }
}

const itemServices = new ItemServices()

module.exports = {
  itemServices
}
