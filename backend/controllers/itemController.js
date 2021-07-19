// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const fs = require('fs')
const path = require('path')
const { itemServices } = require("../services/itemServices")
const { imageServices } = require("../services/imageServices")
const { removeEmpty } = require("../utils/removeEmpty")

class ItemController {
  item_list = async (req, res) => {
    try {
      const itemList = await itemServices.list()
      res.send(itemList)
    } catch (err) {
      throw (err)
    }
  }

  item_detail = async (req, res) => {
    try {
      const { id } = req.params
      const itemDetail = await itemServices.findOne(id)
      res.send(itemDetail)
    } catch (err) {
      throw (err)
    }
  }

  item_create = async (req, res) => {
    try {
      const { name, type, category, price, description } = req.body
      const photo = req.file
      const checkDuplicate = await itemServices.findOneByName(name)
      if (!checkDuplicate) {
        if (!photo) {
          res.send('Must have photo')
        } else {
          const obj = {
            name: photo.originalname,
            img: {
              data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + photo.originalname)),
              contentType: 'image/jpg, image/png, image/jpeg'
            }
          }
          const photoInsert = await imageServices.create(obj)
          if (photoInsert) {
            const itemObj = {
              name: name,
              type: type,
              category: category,
              price: price,
              description: description,
              imageMH: photoInsert.insertedId
            }

            const itemInsert = await itemServices.create(itemObj)
            res.send(itemInsert)
          }
        }
      } else res.send('already exist')
    } catch (err) {
      throw (err)
    }
  }

  item_delete = async (req, res) => {
    try {
      const { id } = req.params
      const itemDelete = await itemServices.delete(id)
      res.send(itemDelete)
    } catch (err) {
      throw (err)
    }
  }

  item_update = async (req, res) => {
    try {
      const { id } = req.params
      const { name, type, category, price, description } = req.body
      const photo = req.files['photo']
      const gallery = req.files['gallery']
      var photoId = null, galleryIds = null;
      const galleryArray = [];
      const oldData = await itemServices.findOne(id)
      if (oldData) {
        if (photo) {
          const photoData = photo[0]
          var photoObj = {
            name: photoData.originalname,
            img: {
              data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + photoData.originalname)),
              contentType: 'image/jpg, image/png, image/jpeg'
            }
          }
          const insertPhoto = await imageServices.create(photoObj)
          await imageServices.delete(oldData.imageMH)
          photoId = insertPhoto._id
        }

        if (gallery) {
          var n = gallery.length
          galleryIds = []
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
          const insertGallery = await imageServices.createMany(galleryArray)
          await imageServices.delete(oldData.image)
          for (var i = 0; i < insertGallery.length; i++) {
            galleryIds.push(insertGallery[i]._id)
          }
        }

        var itemObj = {
          name: name,
          type: type,
          category: category,
          price: price,
          description: description,
          imageMH: photoId,
          image: galleryIds
        }

        const itemUpdate = await itemServices.update(id, removeEmpty(itemObj))
        res.send(itemUpdate)
      } else res.send("not exist");
    } catch (err) {
      throw (err)
    }
  };
}

const itemController = new ItemController

module.exports = {
  itemController
}