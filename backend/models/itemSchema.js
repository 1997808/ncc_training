var mongoose = require('mongoose');
var Image = require('./imageSchema')

const itemSchema = new mongoose.Schema({
  _id: new ObjectID(),
  name: String,
  type: String,
  category: String,
  price: String,
  description: String,
  image: [Image]
});

module.exports = new mongoose.model('Item', itemSchema);