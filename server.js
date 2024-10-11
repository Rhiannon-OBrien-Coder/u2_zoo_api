const express = require('express');
const db = require('./db');
const habitatController = require('./controllers/habitatController')
const animalController = require('./controllers/animalController')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/habitats', habitatController.getAllHabitats)
app.get('/animals', animalController.getAllAnimals)

app.get('/habitats/:id', habitatController.getHabitatById)
app.get('/animals/:id', animalController.getAnimalById)

app.put('/habitats/:id', habitatController.updateHabitat)
app.delete('/habitats/:id', habitatController.deleteHabitat)
app.put('/animals/:id', animalController.updateAnimal)
app.delete('/animals/:id', animalController.deleteAnimal)

app.get('/*', (req, res) => res.send({
    error: "404 page not found"
}))