var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  category: String,
  price: String,
  description: String,
  image: Image
});

module.exports = new mongoose.model('Item', itemSchema);