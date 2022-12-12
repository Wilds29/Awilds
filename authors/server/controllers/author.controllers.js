const Author = require('../models/author.models');

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err));

};

module.exports.addAuthors = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(addedAuthors => res.json(addedAuthors))
        .catch(err => res.status(400).json(err));
};

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(theAuthor => res.json(theAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators: true, new:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json(err));
};