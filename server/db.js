const mysql = require('mysql2');

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',        // Hostname
  port: 3306,               // Port (MySQL default is 3306)
  user: 'root',             // MySQL username
  password: 'khuapu',       // MySQL password
  database: 'skin_care_db', // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    throw err;
  }
  console.log('Connected to the MySQL database');
});

module.exports = db;
