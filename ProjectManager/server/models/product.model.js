const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
    description: { type: String },
  },
    { timestamps: true }
  );
// required strings if i want backend validations
// EX- required: [true, ""] ,  minLength:[3, "name must be 3 char long"]
module.exports.Product = mongoose.model('Products', ProductSchema);