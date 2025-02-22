app.post(
    '/api/signup',
    [
      check('name').not().isEmpty().withMessage('Name is required'),
      check('email').isEmail().withMessage('Enter a valid email address'),
      check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    (req, res) => {
      // Validate input
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, message: errors.array()[0].msg });
      }
  
      const { name, email, password } = req.body;
  
      // Check if user already exists
      const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
      db.query(checkUserQuery, [email], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ success: false, message: 'Database error occurred.' });
        }
  
        if (results.length > 0) {
          return res.status(400).json({ success: false, message: 'Email already exists.' });
        }
  
        // Hash password and insert user
        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Password hashing failed.' });
          }
  
          const insertUserQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
          db.query(insertUserQuery, [name, email, hashedPassword], (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ success: false, message: 'Error saving user.' });
            }
  
            res.status(201).json({ success: true, message: 'User registered successfully!' });
          });
        });
      });
    }
  );
  