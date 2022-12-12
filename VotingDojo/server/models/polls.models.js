const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');

const PollsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Poll NAME IS REQUIRED"],
        minlength: [10, "Name must be 10 characters long!"],
        unique: [true, "question must be unique"],
    },
    option1: {
        type: String,
        required: [true],
        minlength: [3, "option must be 3 characters long"],
        unique: [true, "options must be unique"],
    },
    option2: {
        type: String,
        required: [true],
        minlength: [3, "option must be 3 characters long"],
        unique: [true, "options must be unique"],
    },
    option3: {
        type: String,
        required: [false],
        minlength: [3, "option must be 3 characters long"],
        unique: [false],
    },
    option4: {
        type: String,
        required: [false],
        minlength: [3, "option must be 3 characters long"],
        unique: [false],
    }
}, {timestamps: true})

PollsSchema.plugin(uniqueValidator, { type: 'Not a unique poll name' });
module.exports.Polls = mongoose.model("Polls", PollsSchema);
