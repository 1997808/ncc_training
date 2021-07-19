// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const fs = require('fs')
const path = require('path')
const { db } = require('../configs/db')
const mongo = require('mongodb')
const { itemServices } = require("../services/itemServices")

class ItemController {
  item_list = async (req, res) => {
    try {
      const itemList = await db.collection('items').find({}).toArray()
      res.send(itemList)
    } catch (err) {
      console.log(err)
    }
  }

  item_detail = async (req, res) => {
    try {
      const itemDetail = await db.collection('items').findOne({ _id: new mongo.ObjectId(req.params.id) })
      res.send(itemDetail)
    } catch (err) {
      console.log(err)
    }
  }

  item_create = (req, res) => {
    db.collection('items').findOne({ name: req.body.name }, (err, result) => {
      if (err) throw err
      else if (result == null) {
        const file = req.file
        if (file === undefined) {
          res.send('Must have image')
        } else {
          const obj = {
            name: file.originalname,
            img: {
              data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + file.originalname)),
              contentType: 'image/jpg, image/png, image/jpeg'
            }
          }

          db.collection('images').insertOne(obj, (err, result) => {
            if (err) {
              console.log(err)
              res.send('error')
            } else {
              console.log(result)
              const itemObj = {
                name: req.body.name,
                type: req.body.type,
                category: req.body.category,
                price: req.body.price,
                description: req.body.description,
                imageMH: result.insertedId
              }

              db.collection('items').insertOne(itemObj, (err, result) => {
                if (err) {
                  console.log(err)
                  res.send('error')
                } else {
                  res.send('success')
                }
              })
            }
          })
        }
      } else res.send('already exist')
    })
  }

  item_delete = async (req, res) => {
    try {
      const itemDelete = await db.collection('items').findOneAndDelete({ _id: new mongo.ObjectId(req.params.id) })
      res.send(itemDelete)
    } catch (err) {
      console.log(err)
    }
  }

  item_update = (req, res) => {
    db.collection("items").findOne({ "_id": new mongo.ObjectId(req.params.id) }, (err, result) => {
      if (err) throw err;
      else if (result != null) {
        const gallery = req.files['gallery']
        const photo = req.files['photo'][0]
        var photoId;
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
            photoId = result.insertedId;
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
}

const itemController = new ItemController

module.exports = {
  itemController
}