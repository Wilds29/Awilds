const PollsController = require("../controller/polls.controller");

module.exports = function (app) {
    app.get("/api/Poll", PollsController.getAllPolls);
    app.post("/api/Poll/new", PollsController.addPoll);
    app.get("/api/Poll/:id", PollsController.getOnePoll);
    app.put("/api/Poll/update/:id", PollsController.updatePoll);
    app.delete("/api/Poll/delete/:id", PollsController.deletePoll);
};