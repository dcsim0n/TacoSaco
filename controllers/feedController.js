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
      user: req.session.user,
      ingredients: allIngredients
    });
  })
}

exports.tacoDetails = function( req, res ) { // Controler for /tacos/:id
  Taco.findById( req.params.id ).populate('ingredients')
  .then( taco => {
    console.log("Loaded ingredients:", taco)
    res.render( 'detail-view', {
      title: "Taco Details",
      item: taco,
      children: taco.ingredients,
      editUrl: `/create/tacos/edit/${taco.id}`,
      user: req.session.user
    });
  })
 // Fetch details for taco
}

exports.ingredientDetails =  function( req, res ){ // Controller for /ingredients/:id
  Ingredient.findById( req.params.id )
  .then( ingredient => {
    res.render('detail-view', {
      title: "Ingredient Details",
      item: ingredient,
      children:[],
      editUrl: `/create/ingredients/edit/${ingredient.id}`,
      user: req.session.user
    })
  })
}