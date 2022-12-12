const {Pirates} = require("../models/pirate.model")


module.exports.createPirate = (req, res) => {

const {pirate_name, image, num_of_treasure, crew_position, catch_phrase} = req.body;

    Pirates.create({
        pirate_name,
        image,
        num_of_treasure,
        crew_position,
        catch_phrase,
    })
        .then((Pirate) => res.json(Pirate))
        .catch(err => res.json(err))
}

module.exports.allPirates = (req, res) => {
    Pirates.find()
    .then(Pirates => { res.json({results: Pirates})})
    .catch(err => res.json(err))
}

module.exports.onePirate = (req, res) => {
    Pirates.findOne({_id: req.params.id})
    .then(Pirate => res.json(Pirate))
    .catch(err => res.json(err))
}

module.exports.updatePirate = (req, res) => {
    Pirates.findOneAndUpdate({_id: request.params.id}, req.body, {new:true})
      .then(updatedPirate => res.json(updatedPirate))
      .catch(err => res.json(err))
}

module.exports.deletePirate = (req, res) => {
    Pirates.deleteOne({_id: req.params.id})
    .then(confirmation => res.json(confirmation))
    .catch(err => res.json(err))
}