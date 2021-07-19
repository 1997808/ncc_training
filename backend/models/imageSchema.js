const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  name: String,
  img:
  {
    data: Buffer,
    contentType: String
  }
})

// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
// eslint-disable-next-line new-cap
const Image = new mongoose.model('Image', imageSchema)

module.exports = {
  Image
}
