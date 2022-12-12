const {Polls} = require("../models/polls.models")

module.exports.getAllPolls = (req, res) => {
    Polls.find()
        .then(allPolls => res.json(allPolls))
        .catch(err => res.json(err));

};

module.exports.addPoll = (req, res) => {
    const { name, option1,option2,option3, option4 } = req.body;
    Polls.create({
        name,
        option1,
        option2,
        option3,
        option4,
    })
        .then(addedPolls => res.json(addedPolls))
        .catch(err => res.status(400).json(err));
};

module.exports.getOnePoll = (req, res) => {
    Polls.findOne({_id:req.params.id})
        .then(thePet => res.json(thePet))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePoll = (req, res) => {
    Polls.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators: true, new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePoll = (req, res) => {
    Polls.deleteOne({_id:req.params.id})
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.json(err));
};