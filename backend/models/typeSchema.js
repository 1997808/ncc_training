var mongoose = require('mongoose');

var typeSchema = new mongoose.Schema({
  name: String,
});

module.exports = new mongoose.model('Type', typeSchema);