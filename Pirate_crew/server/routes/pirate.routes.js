const PirateController = require("../controllers/pirate.controller")

module.exports = function (app) {
    app.get("/api/pirates", PirateController.allPirates)
    app.post("/api/pirate/new", PirateController.createPirate)
    app.get("/api/pirate/:id", PirateController.onePirate)
    app.put("/api/pirate/:id/edit", PirateController.updatePirate)
    app.delete("/api/pirates/:id", PirateController.deletePirate)
}