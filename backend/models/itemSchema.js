var mongoose = require('mongoose');
// var { Image } = require('./imageSchema').schema

const itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  category: String,
  price: String,
  description: String,
  image: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
});

module.exports = new mongoose.model('Item', itemSchema);