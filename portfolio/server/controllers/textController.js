// controllers/textController.js
const Text = require('../models/textModel');

// Obtenir tous les textes pour une langue donnée
exports.getTexts = async (req, res) => {
    try {
      const { textClass, language } = req.params;
      const text = await Text.findOne({ textClass, language });
      if (!text) {
        return res.status(404).json({ message: 'Text not found' });
      }
      res.json(text);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Ajouter un texte
  exports.createText = async (req, res) => {
    try {
        const { textClass, language, content } = req.body;
        const newText = new Text({ textClass, language, content });
        await newText.save();
        res.status(201).json(newText);
    } catch (error) {
        console.error('Error creating text:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la création du texte' });
    }
};

