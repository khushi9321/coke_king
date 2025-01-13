const { fetchAllProducts, insertProduct } = require('../models/productModel');

// Get all products
const getAllProducts = (req, res) => {
  fetchAllProducts((err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
};

// Add a product
const addProduct = (req, res) => {
  const { name, description, price, skinType, imageUrl } = req.body;
  insertProduct({ name, description, price, skinType, imageUrl }, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }
    res.status(201).send('Product added successfully');
  });
};

module.exports = { getAllProducts, addProduct };
