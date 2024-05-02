const { Router } = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/auth-controller');
const router = Router();

router.post(
  '/register',
  [
    check('email', 'Wrong email!').isEmail(),
    check('password', 'Minimal length of password must be 6 symbols!').isLength({ min: 6 })
  ],
  authController.registration
);

router.post(
  '/login',
  [
    check('email', 'Enter a correct email!').normalizeEmail().isEmail(),
    check('password', 'Enter password!').exists()
  ],
  authController.login
);

router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);

module.exports = router;