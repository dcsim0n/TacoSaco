/*
| Router for /create 
*/
const express = require('express');
const router = express.Router();

const createController = require('../controllers/createController');


router.get('/ingredients/new', createController.newIngredient )
router.get('/tacos/new', createController.newTaco )
router.post('/ingredients', createController.createIngredient )
router.post('/tacos', createController.createTaco )
router.get('/', createController.createMenu )

module.exports = router;