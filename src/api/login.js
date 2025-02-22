
const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const { check, validationResult } = require('express-validator');

const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'skin_care_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/api/login', [
  check('email').isEmail().withMessage('Enter a valid email address'),
  check('password').not().isEmpty().withMessage('Password is required'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array()[0].msg });
  }

  const { email, password } = req.body;

  // Check if user exists
  const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Database error.' });
    }

    if (results.length === 0) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare password with the stored hash
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Error comparing password' });
      }

      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }

      // Send success response if credentials are valid
      res.status(200).json({ success: true, message: 'Login successful' });
    });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
