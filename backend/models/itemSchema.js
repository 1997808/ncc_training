var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  type: { type: Schema.Types.ObjectId, ref: 'Type' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: Number,
  description: String,
  imageMH: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
  image: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
});

module.exports = new mongoose.model('Item', itemSchema);