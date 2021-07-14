var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
  _id: new ObjectID(),
  name: String,
  desc: String,
  img:
  {
    data: Buffer,
    contentType: String
  }
});

//https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
module.exports = new mongoose.model('Image', imageSchema);