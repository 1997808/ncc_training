//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// var Image = require('../models/imageSchema');
// var Item = require('../models/itemSchema');
var { upload } = require('../configs/multer')

exports.index = function (req, res) {
  res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all items.
exports.item_list = function (req, res) {
  res.send('NOT IMPLEMENTED: item list');
};

// Display detail page for a specific item.
exports.item_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: item detail: ' + req.params.id);
};


// Handle item create on POST.
exports.item_create = (upload.array('image', 5), (req, res) => {
  console.log(req.body)
  // var obj = {
  //   name: req.body.name,
  //   desc: req.body.desc,
  //   img: {
  //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
  //     contentType: 'image/png'
  //   }
  // }
  // Image.create(obj, (err, item) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     // item.save();
  //     res.redirect('/');
  //   }
  // });
});


// Handle item delete on POST.
exports.item_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: item delete POST');
};

// Handle item update on POST.
exports.item_update = function (req, res) {
  res.send('NOT IMPLEMENTED: item update POST');
};