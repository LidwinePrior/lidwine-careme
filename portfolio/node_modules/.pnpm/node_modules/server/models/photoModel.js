// models/photoModel.js
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  url: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  }
});

module.exports = mongoose.model('Photo', photoSchema);