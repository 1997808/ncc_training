var express = require('express');
var router = express.Router();

// Require controller modules.
var item_controller = require('../controllers/itemController');
var { upload } = require('../configs/multer')

/// item ROUTES ///

// GET catalog home page.
router.get('/', item_controller.index);

// POST request for creating item.
router.post('/item/create', upload.array('photos', 5), item_controller.item_create);

// POST request to delete item.
router.post('/item/:id/delete', item_controller.item_delete);

// POST request to update item.
router.post('/item/:id/update', item_controller.item_update);

// GET request for one item.
router.get('/item/:id', item_controller.item_detail);

// GET request for list of all item items.
router.get('/items', item_controller.item_list);

module.exports = router;