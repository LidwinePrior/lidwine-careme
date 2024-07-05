// routes/photoRoutes.js
const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

// Route pour obtenir toutes les photos
router.get('/photos', photoController.getPhotos);

// Route pour ajouter une nouvelle photo
router.post('/photo', photoController.createPhoto);

module.exports = router;