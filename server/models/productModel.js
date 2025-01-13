const db = require('../db');

// Fetch all products from the database
const fetchAllProducts = (callback) => {
  const query = 'SELECT * FROM products';
  db.query(query, callback);
};

// Insert a new product into the database
const insertProduct = ({ name, description, price, skinType, imageUrl }, callback) => {
  const query = 'INSERT INTO products (name, description, price, skinType, imageUrl) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, description, price, skinType, imageUrl], callback);
};

module.exports = { fetchAllProducts, insertProduct };
