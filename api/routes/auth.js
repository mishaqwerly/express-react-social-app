var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/register',
validator({
  email: ['required', 'email'],
  password: ['required', 'min:5', 'max:10'],
}), authController.register);

module.exports = router;