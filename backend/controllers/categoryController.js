const { db } = require('../configs/db')
const mongo = require('mongodb')

// Display list of all categories.
exports.category_list = async (req, res) => {
  try {
    const categoryList = await db.collection('categories').find({}).toArray()
    res.send(categoryList)
  } catch (err) {
    console.log(err)
  }
}

// Handle category create on POST.
exports.category_create = async (req, res) => {
  try {
    const obj = {
      name: req.body.name,
      type: new mongo.ObjectId(req.body.type)
    }
    const categoryDuplicate = await db.collection('categories').findOne({ name: req.body.name })

    if (!categoryDuplicate) {
      const categoryInsert = await db.collection('categories').insertOne(obj)
      res.send(categoryInsert)
    } else {
      res.send('already existed')
    }
  } catch (err) {
    console.log(err)
  }
}

// Handle category delete on POST.
exports.category_delete = async (req, res) => {
  try {
    const categoryDuplicate = await db.collection('categories').findOneAndDelete({ _id: new mongo.ObjectId(req.params.id) })
    res.send(categoryDuplicate)
  } catch (err) {
    console.log(err)
  }
}

// Handle category update on POST.
exports.category_update = async (req, res) => {
  try {
    const categoryDuplicate = await db.collection('categories').findOne({ name: req.body.name })
    if (categoryDuplicate == null) {
      const newvalues = { $set: { name: req.body.name, type: new mongo.ObjectId(req.body.type) } }
      const categoryUpdate = await db.collection('categories').findOneAndUpdate({ _id: new mongo.ObjectId(req.params.id) }, newvalues)
      res.send(categoryUpdate)
    } else {
      res.send('already existed')
    }
  } catch (err) {
    console.log(err)
  }
}
