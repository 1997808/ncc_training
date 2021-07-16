const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: String,
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'Type' }
})

// eslint-disable-next-line new-cap
export const Category = new mongoose.model('Category', categorySchema)
