const { categoryServices } = require('../services/categoryServices')

class CategoryController {
  category_list = async (req, res) => {
    try {
      const categoryList = await categoryServices.list()
      res.send(categoryList)
    } catch (err) {
      throw (err)
    }
  }

  category_create = async (req, res) => {
    try {
      const { name, type } = req.body
      const categoryDuplicate = await categoryServices.findOne(name)

      if (!categoryDuplicate) {
        const categoryInsert = await categoryServices.create(name, type)
        res.send(categoryInsert)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      throw (err)
    }
  }

  category_delete = async (req, res) => {
    try {
      const { id } = req.params
      const categoryDuplicate = await categoryServices.delete(id)
      res.send(categoryDuplicate)
    } catch (err) {
      throw (err)
    }
  }

  category_update = async (req, res) => {
    try {
      const { id } = req.params
      const { name, type } = req.body
      const categoryDuplicate = await categoryServices.findOne(name)
      if (categoryDuplicate == null) {
        const categoryUpdate = await categoryServices.update(id, name, type)
        res.send(categoryUpdate)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      throw (err)
    }
  }
}

const categoryController = new CategoryController()

module.exports = {
  categoryController
}
