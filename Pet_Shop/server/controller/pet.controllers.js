const {Pets} = require("../models/pet.model")

module.exports.getAllPets = (req, res) => {
    Pets.find()
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err));

};

module.exports.addPet = (req, res) => {
    const { name, type, description, skill1,skill2,skill3 } = req.body;
    Pets.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
    })
        .then(addedPets => res.json(addedPets))
        .catch(err => res.status(400).json(err));
};

module.exports.getOnePet = (req, res) => {
    Pets.findOne({_id:req.params.id})
        .then(thePet => res.json(thePet))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePet = (req, res) => {
    Pets.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators: true, new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePet = (req, res) => {
    Pets.deleteOne({_id:req.params.id})
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.json(err));
};