const { roleServices } = require('../services/roleServices')

class RoleController {
  role_list = async (req, res) => {
    try {
      const roleList = await roleServices.list()
      res.send(roleList)
    } catch (err) {
      throw (err)
    }
  }

  role_create = async (req, res) => {
    try {
      const { name } = req.body
      const roleDuplicate = await roleServices.findOne(name)
      if (!roleDuplicate) {
        const roleInsert = await roleServices.create(name)
        res.send(roleInsert)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      throw (err)
    }
  }

  role_delete = async (req, res) => {
    try {
      const { id } = req.params
      const roleDelete = await roleServices.delete(id)
      res.send(roleDelete)
    } catch (err) {
      throw (err)
    }
  }

  role_update = async (req, res) => {
    try {
      const { id, name } = req.body
      const roleDuplicate = await roleServices.findOne(name)
      if (roleDuplicate == null) {
        const roleUpdate = await roleServices.update(id, name)
        res.send(roleUpdate)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      throw (err)
    }
  }
}

const roleController = new RoleController()

module.exports = {
  roleController
}