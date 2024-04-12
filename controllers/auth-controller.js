const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const tokenService = require('../service/token-service');
const User = require('../models/User');

class AuthController {
  async registration(req, res) {
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

  async login(req, res) {
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

      const tokens = tokenService.generateTokens({ userId: user._id });
      await tokenService.saveToken(user._id, tokens.refreshToken);

      res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      res.json({ token: tokens.accessToken, userId: user._id, username: user.username });
    } catch (e) {
      res.status(500).json({ message: 'Something wrong, try again!' });
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;

      if (!refreshToken) {
        return res.status(401).json({ message: 'User is not logged.'});
      }

      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await tokenService.findToken(refreshToken);
      if (!userData || !tokenFromDb) {
        return res.status(401).json({ message: 'User is not logged!' });
      }

      const user = await User.findById(userData.userId);
      const tokens = tokenService.generateTokens({ userId: user._id });

      await tokenService.saveToken(user._id, tokens.refreshToken);

      res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json({ token: tokens.accessToken, userId: user._id, username: user.username });
    } catch (e) {
      res.status(500).json({ message: 'Something wrong, try again!' });
    }
  }
}

module.exports = new AuthController();