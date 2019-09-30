/**
|--------------------------------------------------
| Main page feed routes
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');


/* GET home page. */
router.get('/', feedController.mainFeed);

module.exports = router;
