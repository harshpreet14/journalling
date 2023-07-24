const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    required: true
  }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
