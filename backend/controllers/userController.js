const { userServices } = require('../services/userServices')

class UserController {
  user_list = async (req, res) => {
    try {
      const userList = await userServices.list()
      res.send(userList)
    } catch (err) {
      console.log(err)
    }
  }

  user_create = async (req, res) => {
    try {
      const { username, email, password, roles } = req.body
      const userDuplicate = await userServices.findOne(username)
      console.log(userDuplicate)
      if (userDuplicate == null) {
        const userInsert = await userServices.create(username, email, password, roles)
        res.send(userInsert)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      console.log(err)
    }
  }

  user_delete = async (req, res) => {
    try {
      const { id } = req.params
      const userDuplicate = await userServices.delete(id)
      res.send(userDuplicate)
    } catch (err) {
      console.log(err)
    }
  }

  user_update = async (req, res) => {
    try {
      const { id } = req.params
      const { username, email, password, roles } = req.body
      const userDuplicate = await userServices.findOne(username)
      if (userDuplicate == null) {
        const userUpdate = await userServices.update(id, username, email, password, roles)
        res.send(userUpdate)
      } else {
        res.send('already existed')
      }
    } catch (err) {
      console.log(err)
    }
  }
}

const userController = new UserController()

module.exports = {
  userController
}
