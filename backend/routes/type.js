const express = require('express')
const router = express.Router()

// Require controller modules.
const { typeController } = require('../controllers/typeController')
const { typeValidate } = require('../middlewares/validator')

/// type ROUTES ///
router.post('/type/create', typeValidate, typeController.type_create)
router.post('/type/:id/delete', typeController.type_delete)
router.post('/type/:id/update', typeValidate, typeController.type_update)
router.get('/types', typeController.type_list)

module.exports = router
