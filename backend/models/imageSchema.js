var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
  name: String,
  img:
  {
    data: Buffer,
    contentType: String
  }
});

//https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
module.exports = new mongoose.model('Image', imageSchema);