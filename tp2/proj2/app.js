/*const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.listen(5000,()=>{
    console.log("server is running on port 5000")

})

app.use(bodyParser.json());

let voitures = [{ id: 1, name: "clio" }, { id: 2, name: "megane" }, { id: 3, name: "range" }];

//tous les voitures
app.get('/voitures', (req, res) => {
    res.json(voitures);
});

//voiture par id
app.get('/voitures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
});

*/
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const voituresRouter = require('./routes/voitures');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/voitures', voituresRouter);

app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/public/ajoutVoiture.html')
})


app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
