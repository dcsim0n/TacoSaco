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
router.get('/tacos/:id', feedController.tacoDetails );
router.delete('/tacos/:id', feedController.deleteTaco );
router.get('/ingredients/:id', feedController.ingredientDetails );
router.delete('/ingredients/:id', feedController.deleteIngredient );

module.exports = router;
