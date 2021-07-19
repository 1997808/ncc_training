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

  createMany = async (gallery) => {
    try {
      return await Item.insertOneMany(gallery)
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

  deleteMany = async (idArr) => {
    try {
      var obj = []
      for (var i = 0; i < idArr.length; i++) {
        obj.push(new mongo.ObjectId(idArr[i]))
      }
      return await Item.findOneAndDelete({ _id: { $in: obj } })
    } catch (err) {
      throw (err)
    }
  }
}

const itemServices = new ItemServices()

module.exports = {
  itemServices
}
