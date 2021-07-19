// const { db } = require('../configs/db')
const mongo = require('mongodb')
const { Image } = require('../models/imageSchema')

class ImageServices {
  list = async () => {
    try {
      return await Image.find({})
    } catch (err) {
      throw (err)
    }
  }

  findOne = async (id) => {
    try {
      return await Image.findOne({ _id: new mongo.ObjectId(id) })
    } catch (err) {
      throw (err)
    }
  }

  create = async (photo) => {
    try {
      return await Image.insertOne(photo)
    } catch (err) {
      throw (err)
    }
  }

  createMany = async (gallery) => {
    try {
      return await Image.insertOneMany(gallery)
    } catch (err) {
      throw (err)
    }
  }

  delete = async (id) => {
    try {
      return await Image.findOneAndDelete({ _id: new mongo.ObjectId(id) })
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
      return await Image.findOneAndDelete({ _id: { $in: obj } })
    } catch (err) {
      throw (err)
    }
  }
}

const imageServices = new ImageServices()

module.exports = {
  imageServices
}
