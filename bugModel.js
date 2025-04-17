const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: String, required: true },
  description: { type: String, required: true },
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;
