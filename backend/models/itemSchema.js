const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: String,
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'Type' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: Number,
  description: String,
  imageMH: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
  image: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
})
// eslint-disable-next-line new-cap
const Item = new mongoose.model('Item', itemSchema)
module.exports = {
  Item
}