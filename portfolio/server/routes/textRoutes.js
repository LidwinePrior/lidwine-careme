// routes/textRoutes.js
const express = require('express');
const router = express.Router();
const textController = require('../controllers/textController');

// Route pour obtenir tous les textes
router.get('/texts/:textClass/:language', textController.getTexts);

// Route pour créer un texte
router.post('/text', textController.createText);

module.exports = router;