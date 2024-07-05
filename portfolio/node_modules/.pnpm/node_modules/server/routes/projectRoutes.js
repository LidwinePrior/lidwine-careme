// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Route pour récupérer les 4 derniers projets
router.get('/projects/latest', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 }).limit(4);
        res.json(projects);
    } catch (error) {
        console.error('Error fetching latest projects:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route pour récupérer tous les projets
router.get('/projects', projectController.getProjects);

// Route pour récupérer un projet par ID
router.get('/project/:id', projectController.getProjectById);


// Route pour ajouter un nouveau projet
router.post('/project', projectController.createProject);

module.exports = router;