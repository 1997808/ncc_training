var mongoose = require('mongoose');
// var { Image } = require('./imageSchema').schema

const itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  category: String,
  price: String,
  description: String,
  image: [mongoose.Types.ObjectId]
});

module.exports = new mongoose.model('Item', itemSchema);