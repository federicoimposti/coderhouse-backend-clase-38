const express = require('express');
const productsRouter = express.Router();

const { getProducts, saveProducts } = require('../controllers/products.js');

productsRouter.get("/", async (req, res) => {
  const response = await getProducts();
  res.render('pages/productForm', { products: response });
});

productsRouter.post("/", (req, res) => {
  saveProducts(req.body);
  res.redirect("/");
});

module.exports = productsRouter;