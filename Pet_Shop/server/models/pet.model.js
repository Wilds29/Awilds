const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "PET NAME IS REQUIRED"],
        minlength: [3, "Name must be 3 characters long!"],
        unique: [true, "name must be unique"],
    },
    type: {
        type: String,
        required: [true, "PET TYPE IS REQUIRED"],
    },
    description: {
        type: String,
        required: [true, "DESCRIPTION IS REQUIRED"],
        minlength: [3, "Name must be 3 characters long!"],
        unique: [false],
    },
    skill1: {
        type: String,
        required: [false],
        minlength: [3, "Skill must be 3 characters long"],
        unique: [false],
    },
    skill2: {
        type: String,
        required: [false],
        minlength: [3, "Skill must be 3 characters long"],
        unique: [false],
    },
    skill3: {
        type: String,
        required: [false],
        minlength: [3, "Skill must be 3 characters long"],
        unique: [false],
    }
}, {timestamps: true})

PetSchema.plugin(uniqueValidator, { type: 'Not a unique name' });
module.exports.Pets = mongoose.model("Pets", PetSchema);
