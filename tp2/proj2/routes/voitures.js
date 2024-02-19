const express = require('express');
const router = express.Router();

let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];



router.get('/', (req, res) => {
    res.send(voitures);
});


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
});


router.post('/', (req, res) => {
    const nouvelleVoiture = req.body;
    voitures.push(nouvelleVoiture);
    res.json({ message: 'Voiture ajoutée avec succès', voitures });
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === id);
    if (index !== -1) {
        voitures[index] = req.body;
        res.json({ message: 'Voiture modifiée avec succès', voitures });
    } else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
});

module.exports = router;
