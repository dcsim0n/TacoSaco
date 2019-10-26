/*
| Router for /create 
*/
const express = require('express');
const router = express.Router();

const createController = require('../controllers/createController');


router.get('/ingredients/new', createController.newIngredient )
router.get('/ingredients/edit/:id', createController.editIngredient )
router.get('/tacos/new', createController.newTaco )
router.get('/tacos/edit/:id', createController.editTaco )
router.post('/ingredients', createController.createIngredient )
router.patch('/ingredients', createController.updateIngredient )
router.post('/tacos', createController.createTaco )
router.patch('/tacos', createController.updateTaco )
router.get('/', createController.createMenu )

module.exports = router;