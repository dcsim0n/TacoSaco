/**
|--------------------------------------------------
| main Feed controllers
|--------------------------------------------------
*/
const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const Taco = require('../models/taco');

exports.mainFeed = function ( req, res ) {
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
}

exports.tacoDetails = function( req, res ) { // Controler for /tacos/:id
  let viewTaco;
  Taco.findById( req.params.id )
  .then( taco => {
    viewTaco = taco
    console.log("Taco ingredients", taco.ingredients )
    return viewTaco.populate('ingredients');
  })
  .then( ingredients => {
    console.log("Loaded ingredients:", ingredients)
    res.render( 'detail-view', {
      title: "Taco Details",
      item: viewTaco,
      children: ingredients
    });
  });
 // Fetch details for taco
}

exports.ingredientDetails =  function( req, res ){ // Controller for /ingredients/:id
  Ingredient.findById( req.params.id )
  .then( ingredient => {
    res.render('detail-view', {
      title: "Ingredient Details",
      item: ingredient
    })
  })
}