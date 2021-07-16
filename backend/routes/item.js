const express = require('express')
const router = express.Router()

// Require controller modules.
const itemController = require('../controllers/itemController')
const categoryController = require('../controllers/categoryController')
const typeController = require('../controllers/typeController')

const { upload } = require('../configs/multer')
const cpUpload = upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'gallery', maxCount: 4 }])
const { typeValidate, itemCreateValidate } = require('../middlewares/validator')

router.get('/', itemController.index)

/// item ROUTES ///
router.post('/item/create', upload.single('photo'), itemCreateValidate, itemController.item_create)
router.post('/item/:id/delete', itemController.item_delete)
router.post('/item/:id/update', cpUpload, itemController.item_update)
router.get('/item/:id', itemController.item_detail)
router.get('/items', itemController.item_list)

/// category ROUTES ///
router.post('/category/create', typeValidate, categoryController.category_create)
router.post('/category/:id/delete', categoryController.category_delete)
router.post('/category/:id/update', typeValidate, categoryController.category_update)
router.get('/categories', categoryController.category_list)

/// type ROUTES ///
router.post('/type/create', typeValidate, typeController.type_create)
router.post('/type/:id/delete', typeController.type_delete)
router.post('/type/:id/update', typeValidate, typeController.type_update)
router.get('/types', typeController.type_list)

module.exports = router
