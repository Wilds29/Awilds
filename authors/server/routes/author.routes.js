const AuthorController = require("../controllers/author.controllers");

module.exports = function (app) {
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.post("/api/authors/new", AuthorController.addAuthors);
    app.get("/api/authors/:id", AuthorController.getOneAuthor);
    app.put("/api/authors/update/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
};