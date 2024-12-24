const express = require('express'); // Importe Express
const path = require('path'); // Pour gérer les chemins de fichiers

const app = express(); // Initialise une application Express
const PORT = 3000; // Définit le port du serveur

// Définis le dossier contenant tes fichiers HTML et autres ressources
app.use(express.static(path.join(__dirname, 'public')));

// Route par défaut pour servir ton fichier HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarre le serveur
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
