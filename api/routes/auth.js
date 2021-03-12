var express = require('express');
const validator = require('../middleware/validator');
var router = express.Router();
const authController = require('../controllers/authController');

router.post('/login',
  validator({
    email: ['required', 'email'],
    password: ['required', 'min:5', 'max:10'],
  }), 
  authController.login);
router.post('/register',
  validator({
    email: ['required', 'email', 'unique:users:email'],
    password: ['required', 'min:5', 'max:10'],
  }), 
  authController.register);
router.put('/users/:id',
  validator({
    name: ['required','min:5','max:100'],
    email: ['required', 'email', 'unique:users:email:isUpdate:user_id'],
    password: ['required', 'min:5', 'max:10'],
  }), 
  authController.editUser);
module.exports = router;