const { Category } = require('../models/categorySchema')

class CategoryServices {
  list = async () => {
    try {
      return await Category.find({})
    } catch (err) {
      throw (err)
    }
  }

  findOne = async (name) => {
    try {
      return await Category.findOne({ name: name })
    } catch (err) {
      throw (err)
    }
  }

  create = async (name, type) => {
    try {
      const newCategory = new Category({
        name: name,
        type: type
      })
      return await newCategory.save()
    } catch (err) {
      throw (err)
    }
  }

  delete = async (id) => {
    try {
      return await Category.findOneAndDelete({ _id: id })
    } catch (err) {
      throw (err)
    }
  }

  update = async (id, name, type) => {
    try {
      const newvalues = { $set: { name: name, type: type } }
      return await Category.findOneAndUpdate({ _id: id }, newvalues)
    } catch (err) {
      throw (err)
    }
  }
}

const categoryServices = new CategoryServices()

module.exports = {
  categoryServices
}
