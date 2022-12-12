const PetController = require("../controller/pet.controllers");

module.exports = function (app) {
    app.get("/api/Pet", PetController.getAllPets);
    app.post("/api/Pet/new", PetController.addPet);
    app.get("/api/Pet/:id", PetController.getOnePet);
    app.put("/api/Pet/update/:id", PetController.updatePet);
    app.delete("/api/Pet/delete/:id", PetController.deletePet);
};