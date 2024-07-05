// models/textModel.js
const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
  textClass: { 
    type: String, 
    required: true
  },
  language: { 
    type: String, 
    required: true, 
    enum: ['en', 'fr'], 
    default: 'fr' 
  },
  content: { 
    type: String, 
    required: true 
  }
}) ;

module.exports = mongoose.model('Text', textSchema);