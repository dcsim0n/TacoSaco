/**
|--------------------------------------------------
| main Feed controllers
|--------------------------------------------------
*/
const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const Taco = require('../models/taco');

exports.mainFeed = router.get('/', function ( req, res ) {
let allIngredients
Ingredient.find()
.then( ingredients => {
  allIngredients = ingredients
  return Taco.find()
})
.then( tacos => {
    res.render('index', { 
      title: 'Welcome to Taco Saco' ,
      tacos,
      ingredients: allIngredients
    });
  })
});