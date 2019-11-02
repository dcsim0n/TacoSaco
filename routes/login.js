/**
|--------------------------------------------------
| Authentication routes
| Dana Simmons 2019
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.loginForm );
router.post('/login', authController.authenticate );
router.get('/leave', authController.logout)

module.exports = router