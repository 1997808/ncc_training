var express = require('express');
var router = express.Router();

// Require controller modules.
var item_controller = require('../controllers/itemController');
var category_controller = require('../controllers/categoryController');
var type_controller = require('../controllers/typeController');

var { upload } = require('../configs/multer')
var cpUpload = upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'gallery', maxCount: 4 }])
var { typeValidate, itemCreateValidate } = require('../middlewares/validator')

router.get('/', item_controller.index);

/// item ROUTES ///
router.post('/item/create', upload.single('photo'), itemCreateValidate, item_controller.item_create);
router.post('/item/:id/delete', item_controller.item_delete);
router.post('/item/:id/update', cpUpload, item_controller.item_update);
router.get('/item/:id', item_controller.item_detail);
router.get('/items', item_controller.item_list);


/// category ROUTES ///
router.post('/category/create', typeValidate, category_controller.category_create);
router.post('/category/:id/delete', category_controller.category_delete);
router.post('/category/:id/update', typeValidate, category_controller.category_update);
router.get('/categories', category_controller.category_list);


/// type ROUTES ///
router.post('/type/create', typeValidate, type_controller.type_create);
router.post('/type/:id/delete', type_controller.type_delete);
router.post('/type/:id/update', typeValidate, type_controller.type_update);
router.get('/types', type_controller.type_list);

module.exports = router;