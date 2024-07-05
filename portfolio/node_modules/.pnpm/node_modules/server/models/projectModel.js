// models/projectModel.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  descriptions: [
    {
        language: {
            type: String,
            required: true,
            enum: ['fr', 'en'], 
            default: 'fr'
        },
        description: {
            type: String,
            required: true
        }
    }
  ],
  link: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);