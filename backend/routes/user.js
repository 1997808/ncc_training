const express = require('express')
const router = express.Router()

// Require controller modules.
const { userController } = require('../controllers/userController')
const { userCreateValidate } = require('../middlewares/validator')

/// user ROUTES ///
router.post('/user/create', userCreateValidate, userController.user_create)
router.post('/user/:id/delete', userController.user_delete)
router.post('/user/:id/update', userCreateValidate, userController.user_update)
router.get('/users', userController.user_list)

module.exports = router
