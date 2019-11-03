/**
|--------------------------------------------------
| Authentication routes
| Dana Simmons 2019
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.get('/login', authController.loginForm );
router.post('/login', authController.authenticate );
router.get('/leave', authController.logout );
router.get('/signup', userController.signUpForm );
router.post('/signup', userController.createUser );
module.exports = router