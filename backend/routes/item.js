const express = require('express')
const router = express.Router()

// Require controller modules.
const { itemController } = require('../controllers/itemController')

const { upload } = require('../configs/multer')
const cpUpload = upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'gallery', maxCount: 4 }])
const { itemCreateValidate } = require('../middlewares/validator')

/// item ROUTES ///
router.post('/item/create', upload.single('photo'), itemCreateValidate, itemController.item_create)
router.post('/item/:id/delete', itemController.item_delete)
router.post('/item/:id/update', cpUpload, itemController.item_update)
router.get('/item/:id', itemController.item_detail)
router.get('/items', itemController.item_list)

module.exports = router
