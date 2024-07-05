// controllers/photoController.js
const Photo = require('../models/photoModel');

// Obtenir toutes les photos
exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une nouvelle photo
exports.createPhoto = async (req, res) => {
  const photo = new Photo({
    title: req.body.title,
    url: req.body.url,
    description: req.body.description
  });

  try {
    const newPhoto = await photo.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};