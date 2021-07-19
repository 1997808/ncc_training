const express = require('express')
const router = express.Router()

// Require controller modules.
const { roleController } = require('../controllers/roleController')
const { typeValidate } = require('../middlewares/validator')

/// role ROUTES ///
router.post('/role/create', typeValidate, roleController.role_create)
router.post('/role/:id/delete', roleController.role_delete)
router.post('/role/:id/update', typeValidate, roleController.role_update)
router.get('/roles', roleController.role_list)

module.exports = router
