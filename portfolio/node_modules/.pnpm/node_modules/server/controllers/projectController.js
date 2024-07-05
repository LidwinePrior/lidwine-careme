// controllers/projectController.js
const Project = require('../models/projectModel');

// Obtenir tous les projets
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un projet par ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter un nouveau projet
exports.createProject = async (req, res) => {
  try {
    const { title, descriptions, link, imageUrl } = req.body;
    
    // Vérification des descriptions pour s'assurer qu'elles sont correctement formatées
    if (!Array.isArray(descriptions) || descriptions.length === 0) {
      return res.status(400).json({ error: 'Descriptions are required and should be an array' });
    }

    const newProject = new Project({ title, descriptions, link, imageUrl });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};