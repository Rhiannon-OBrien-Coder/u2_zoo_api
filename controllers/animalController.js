const Animal = require('../models/animal');

//all plants -> GET
const getAllAnimals = async (req, res) => {
    try {
        const animal = await Animal.find()
        res.json(animal)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//plants by id -> GET
const getAnimalById = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findById(id)
        if (animal) {
            return res.json(animal);
        }
        return res.status(404).send('animal with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//create a new plant -> POST
const createAnimal = async (req, res) => {
    try {
        const animal = await new Animal(req.body)
        await animal.save()
        return res.status(201).json({
            animal,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

//delete -> DELETE
const deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Animal.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("animal deleted");
        }
        throw new Error("animal not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//update -> PUT
//uses all aspects of other functions. This is the problem child. Try to complete it last when possible
const updateAnimal = async (req, res) => {
    try {
        let { id } = req.params;
        let animal = await Animal.findByIdAndUpdate(id, req.body, { new: true })
        if (animal) {
            return res.status(200).json(plant)
        }
        throw new Error("animal not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllAnimals,
    getAnimalById,
    createAnimal,
    updateAnimal,
    deleteAnimal
}