const express = require('express')
const router = express.Router()

// Require controller modules.
const { categoryController } = require('../controllers/categoryController')
const { typeValidate } = require('../middlewares/validator')

/// category ROUTES ///
router.post('/category/create', typeValidate, categoryController.category_create)
router.post('/category/:id/delete', categoryController.category_delete)
router.post('/category/:id/update', typeValidate, categoryController.category_update)
router.get('/categories', categoryController.category_list)

module.exports = router
