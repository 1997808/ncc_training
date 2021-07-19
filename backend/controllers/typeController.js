const { db } = require('../configs/db')
const mongo = require('mongodb')

class TypeController {
  type_list = async (req, res) => {
    try {
      const typeList = await db.collection('types').find({}).toArray()
      res.send(typeList)
    } catch (err) {
      console.log(err)
    }
  }

  type_create = async (req, res) => {
    try {
      const obj = {
        name: req.body.name
      }
      const typeDuplicate = await db.collection('types').findOne({ name: req.body.name })
      if (typeDuplicate == null) {
        const typeInsert = await db.collection('types').insertOne(obj)
        res.send(typeInsert)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      console.log(err)
    }
  }

  type_delete = async (req, res) => {
    try {
      const typeDelete = await db.collection('types').findOneAndDelete({ _id: new mongo.ObjectId(req.params.id) })
      res.send(typeDelete)
    } catch (err) {
      console.log(err)
    }
  }

  type_update = async (req, res) => {
    try {
      const newvalues = { $set: { name: req.body.name } }
      const typeDuplicate = await db.collection('types').findOne({ name: req.body.name })
      if (typeDuplicate == null) {
        const typeUpdate = await db.collection('types').findOneAndUpdate({ _id: new mongo.ObjectId(req.params.id) }, newvalues)
        res.send(typeUpdate)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      console.log(err)
    }
  }
}

const typeController = new TypeController()

module.exports = {
  typeController
}