//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
var Image = require('../models/imageSchema');
var fs = require('fs');
var path = require('path');
// var Item = require('../models/itemSchema');


exports.index = (req, res) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all items.
exports.item_list = (req, res) => {
  res.send('NOT IMPLEMENTED: item list');
};

// Display detail page for a specific item.
exports.item_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: item detail: ' + req.params.id);
};


// Handle item create on POST.
exports.item_create = (req, res) => {
  const files = req.files
  const imageArray = [];
  if (files) {
    var n = files.length
    for (var i = 0; i < n; i++) {
      var obj = {
        name: files[i].originalname,
        desc: req.body.desc,
        img: {
          data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + files[i].originalname)),
          contentType: 'image/jpg, image/png, image/jpeg'
        }
      }

      Image.create(obj, (err, item) => {
        if (err) {
          console.log(err);
        }
        else {
          item.save();
          imageArray.push()
        }
      });
    }
  }


};


// Handle item delete on POST.
exports.item_delete = (req, res) => {
  res.send('NOT IMPLEMENTED: item delete POST');
};

// Handle item update on POST.
exports.item_update = (req, res) => {
  res.send('NOT IMPLEMENTED: item update POST');
};