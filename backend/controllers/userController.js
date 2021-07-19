const { userServices } = require('../services/userServices')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const saltRounds = 10;
const { roleServices } = require('../services/roleServices')

class UserController {
  user_list = async (req, res) => {
    try {
      const userList = await userServices.list()
      res.send(userList)
    } catch (err) {
      throw (err)
    }
  }

  user_create = async (req, res) => {
    try {
      const { username, email, password, roles } = req.body
      const userDuplicate = await userServices.findOne(username)
      if (userDuplicate == null) {
        bcrypt.hash(password, saltRounds, async function (err, hash) {
          const userInsert = await userServices.create(username, email, hash, roles)
          res.send(userInsert)
        });
      } else {
        res.send('already existed')
      }
    } catch (err) {
      throw (err)
    }
  }

  user_login = async (req, res) => {
    try {
      const { username, password } = req.body
      const userExisted = await userServices.findOne(username)
      if (userExisted) {
        const passwordIsValid = bcrypt.compareSync(
          password,
          userExisted.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        } else {
          var token = jwt.sign({ id: userExisted._id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
          });

          var authorities = [];
          const userRoles = await roleServices.findMany(userExisted.roles)
          console.log(userRoles)
          for (let i = 0; i < userRoles.length; i++) {
            authorities.push("ROLE_" + userRoles[i].name.toUpperCase());
          }
          res.send({
            id: userExisted._id,
            username: userExisted.username,
            email: userExisted.email,
            roles: authorities,
            accessToken: token
          });
        }
      } else {
        res.send('user not found')
      }
    } catch (err) {
      throw (err)
    }
  }

  user_delete = async (req, res) => {
    try {
      const { id } = req.params
      const userDuplicate = await userServices.delete(id)
      res.send(userDuplicate)
    } catch (err) {
      throw (err)
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
      throw (err)
    }
  }
}

const userController = new UserController()

module.exports = {
  userController
}
