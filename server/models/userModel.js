const db = require('../db');

// Fetch all products from the database
const fetchAlluser = (callback) => {
  const query = 'SELECT * FROM user';
  db.query(query, callback);
};

// Insert a new product into the database
const insertuser = ({ userid,name, password, address, email, phonenumber }, callback) => {
  const query = 'INSERT INTO products (userid,name, password, address, email, phonenumber) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [userid,name, password, address, email, phonenumber], callback);
};

module.exports = { fetchAlluser, insertuser };
