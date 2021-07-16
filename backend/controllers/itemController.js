//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// var Image = require('../models/imageSchema');
// var Item = require('../models/itemSchema');
var fs = require('fs');
var path = require('path');
var { db } = require("../configs/db")
var mongo = require('mongodb')

exports.index = (req, res) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all items.
exports.item_list = (req, res) => {
  db.collection("items").find({}).toArray((err, result) => {
    if (err) throw err;
    else res.send(result);
  });
};

// Display detail page for a specific item.
exports.item_detail = async (req, res) => {
  await db.collection("items").findOne({ "_id": new mongo.ObjectId(req.params.id) }, (err, result) => {
    if (err) throw err;
    else res.send(result);
  });
};


// Handle item create on POST.
exports.item_create = (req, res) => {
  db.collection("items").findOne({ "name": req.body.name }, (err, result) => {
    if (err) throw err;
    else if (result == null) {
      const file = req.file
      if (file == undefined) {
        res.send("Must have image");
      } else {
        var obj = {
          name: file.originalname,
          img: {
            data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + file.originalname)),
            contentType: 'image/jpg, image/png, image/jpeg'
          }
        }

        db.collection("images").insertOne(obj, (err, result) => {
          if (err) {
            console.log(err);
            res.send('error');
          } else {
            console.log(result)
            var itemObj = {
              name: req.body.name,
              type: req.body.type,
              category: req.body.category,
              price: req.body.price,
              description: req.body.description,
              imageMH: result.insertedId
            }

            db.collection("items").insertOne(itemObj, (err, result) => {
              if (err) {
                console.log(err);
                res.send('error');
              }
              else {
                res.send('success');
              }
            });
          }
        })
      }
    } else res.send("already exist");
  })
};

// Handle item delete on POST.
exports.item_delete = (req, res) => {
  db.collection("items").findOneAndDelete({ "_id": new mongo.ObjectId(req.params.id) }, (err, result) => {
    if (err) throw err;
    else {
      res.send("1 item deleted");
    }
  })
};

// Handle item update on POST.
exports.item_update = (req, res) => {
  db.collection("items").findOne({ "_id": new mongo.ObjectId(req.params.id) }, (err, result) => {
    if (err) throw err;
    else if (result != null) {
      const gallery = req.files['gallery']
      const photo = req.files['photo'][0]
      const galleryArray = [];

      if (photo != undefined) {
        var photoObj = {
          name: photo.originalname,
          img: {
            data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + photo.originalname)),
            contentType: 'image/jpg, image/png, image/jpeg'
          }
        }
      }

      if (gallery != undefined) {
        var n = gallery.length
        for (var i = 0; i < n; i++) {
          var obj = {
            name: gallery[i].originalname,
            img: {
              data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + gallery[i].originalname)),
              contentType: 'image/jpg, image/png, image/jpeg'
            }
          }
          galleryArray.push(obj);
        }
      }

      db.collection("images").insertOne(photoObj, (err, result) => {
        if (err) {
          console.log(err);
          res.send('error');
        } else {
          var photoId = result.insertedId;
          db.collection("images").insertMany(galleryArray, (err, result) => {
            if (err) {
              console.log(err);
              res.send('error');
            } else {
              var itemObj = {
                name: req.body.name,
                type: req.body.type,
                category: req.body.category,
                price: req.body.price,
                description: req.body.description,
                imageMH: photoId,
                image: result.insertedIds
              }

              db.collection("items").findOneAndUpdate({ "_id": new mongo.ObjectId(req.params.id) }, { $set: itemObj }, (err, result) => {
                if (err) {
                  console.log(err);
                  res.send('error');
                }
                else {
                  res.send('success');
                }
              });
            }
          })
        }
      })
    } else res.send("already exist");
  })
};