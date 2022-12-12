const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    pirate_name: {
        type: String,
        required: [true, "PIRATE NAME IS REQUIRED"],
        minlength: [3, "Name must be 3 characters long!"],
    },
    image: {
        type: String,
        required: [true, "PIRATE IMAGE IS REQUIRED"]
    },
    num_of_treasure: {
        type: Number,
        required: [true, "NUMBER OF TREASURE CHESTS ARE REQUIRED"]
    },
    catch_phrase: {
        type: String,
        required: [true, "CATCH PHRASE IS REQUIRED"],
        minlength: [3, "Name must be 3 characters long!"],
    },
    crew_position: {
        type: String,
        required: [true, "CREW POSITION IS REQUIRED"]
    }
}, {timestamps: true})

module.exports.Pirates = mongoose.model('Pirates', PirateSchema)