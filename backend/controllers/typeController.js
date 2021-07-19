const { typeServices } = require('../services/typeServices')

class TypeController {
  type_list = async (req, res) => {
    try {
      const typeList = await typeServices.list()
      res.send(typeList)
    } catch (err) {
      throw (err)
    }
  }

  type_create = async (req, res) => {
    try {
      const { name } = req.body
      const typeDuplicate = await typeServices.findOne(name)
      if (typeDuplicate == null) {
        const typeInsert = await typeServices.create(name)
        res.send(typeInsert)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      throw (err)
    }
  }

  type_delete = async (req, res) => {
    try {
      const { id } = req.params
      const typeDelete = await typeServices.delete(id)
      res.send(typeDelete)
    } catch (err) {
      throw (err)
    }
  }

  type_update = async (req, res) => {
    try {
      const { id, name } = req.body
      const typeDuplicate = await typeServices.findOne(name)
      if (typeDuplicate == null) {
        const typeUpdate = await typeServices.update(id, name)
        res.send(typeUpdate)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      throw (err)
    }
  }
}

const typeController = new TypeController()

module.exports = {
  typeController
}