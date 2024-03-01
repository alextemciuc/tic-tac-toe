const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();

router.post(
  '/register',
  [
    check('email', 'Wrong email!').isEmail(),
    check('password', 'Minimal length of password must be 6 symbols!').isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Wrong registration data.'
        });
      }

      const {firstName, lastName, username, dateOfBirth, email, password} = req.body;
      const isEmailUsed = await User.findOne({ email });

      if (isEmailUsed) {
        return res.status(400).json({ message: 'This email is already used.' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ firstName, lastName, username, dateOfBirth, email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'User created.' });

    } catch (e) {
      res.status(500).json({ message: 'Something wrong, try again!' });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Enter a correct email!').normalizeEmail().isEmail(),
    check('password', 'Enter password!').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Wrong login data!'
        });
      }

      const {email, password} = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found!' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Wrong password, try again!' });
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id, username: user.username });
    } catch (e) {
      res.status(500).json({ message: 'Something wrong, try again!' });
    }
  }
);

router.post('/check', (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'User is not logged' });
    }

    jwt.verify(token, config.get('jwtSecret'));
    res.json({ message: 'User is logged'});
  } catch (e) {
    res.status(401).json({ message: 'User is not logged' });
  }
})

module.exports = router;