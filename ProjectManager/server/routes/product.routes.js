const ProductController = require("../controllers/product.controller")

module.exports = function (app) {
    app.get('/products', ProductController.getAllProducts);
    app.get('/products/:id', ProductController.getProduct);
    app.put('/products/:id/edit', ProductController.updateProduct);
    app.post('/products/new', ProductController.createProduct);
    app.delete("/products/:id/delete", ProductController.deleteProduct);
  }