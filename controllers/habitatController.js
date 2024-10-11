const Habitat = require('../models/habitat');

//all plants -> GET
const getAllHabitats = async (req, res) => {
    try {
        const habitat = await Habitat.find()
        res.json(habitat)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//plants by id -> GET
const getHabitatById = async (req, res) => {
    try {
        const { id } = req.params;
        const habitat = await Habitat.findById(id)
        if (habitat) {
            return res.json(habitat);
        }
        return res.status(404).send('Habitat with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//create a new plant -> POST
const createHabitat = async (req, res) => {
    try {
        const habitat = await new Habitat(req.body)
        await habitat.save()
        return res.status(201).json({
            habitat,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

//delete -> DELETE
const deleteHabitat = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Habitat.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Habitat deleted");
        }
        throw new Error("Habitat not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//update -> PUT
//uses all aspects of other functions. This is the problem child. Try to complete it last when possible
const updateHabitat = async (req, res) => {
    try {
        let { id } = req.params;
        let habitat = await Habitat.findByIdAndUpdate(id, req.body, { new: true })
        if (habitat) {
            return res.status(200).json(plant)
        }
        throw new Error("Habitat not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllHabitats,
    getHabitatById,
    createHabitat,
    updateHabitat,
    deleteHabitat
}