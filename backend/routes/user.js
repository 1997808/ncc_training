const express = require('express')
const router = express.Router()

// Require controller modules.
const { userController } = require('../controllers/userController')
const { userCreateValidate } = require('../middlewares/validator')
const authJwt = require('../middlewares/authJWT')

/// user ROUTES ///
router.post('/user/create', userCreateValidate, userController.user_create)
router.post('/user/login', userController.user_login)
router.post('/user/:id/delete', userController.user_delete)
router.post('/user/:id/update', userCreateValidate, userController.user_update)
router.get('/users', authJwt.verifyToken, userController.user_list)

module.exports = router
