var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  name: String,
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'Type' }
});

module.exports = new mongoose.model('Category', categorySchema);