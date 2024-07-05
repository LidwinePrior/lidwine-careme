//index.js
const express = require('express');
const connectDB = require('./db');
const path = require('path');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const photoRoutes = require('./routes/photoRoutes');
const textRoutes = require('./routes/textRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(express.json());
app.use(cors());



// Connexion à la base de données MongoDB
connectDB();


// Utilisation des routes
app.use('/api', projectRoutes);
app.use('/api', photoRoutes);
app.use('/api', textRoutes);
app.use('/api', contactRoutes);


// Route pour servir l'interface admin
app.use('/admin', express.static(path.join(__dirname, 'admin')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
