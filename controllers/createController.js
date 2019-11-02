/*
| Controller for creating ingreaients and tacos
| Dana Simmons 2019
*/
const Ingredient = require('../models/ingredient');
const Taco = require('../models/taco');
const mongoose = require('mongoose');

exports.createMenu = ( req, resp, next ) =>{
    resp.render('menu', {
        title: "Your Menue",
        user: req.user
    })
}
exports.newIngredient = ( req, resp, next ) =>{
    if(req.user){
        resp.render('new-ingredient',{
            title: "Create new Ingredient",
            user: req.user
        });
    }else{
        resp.redirect('/login');
    }
}
exports.createIngredient = ( req, resp, next ) =>{
    Ingredient.create({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        userId: req.user.id
    })
    .then( ingredient =>{
        resp.redirect(`/ingredients/${ingredient.id}`);
    })
}
exports.updateIngredient = ( req, resp, next ) =>{
    Ingredient.findById( req.body.id )
    .then( ingredient =>{
        ingredient.title = req.body.title
        ingredient.description = req.body.description
        ingredient.image = req.body.image
        return ingredient.save()
    })
    .then( ingredient =>{
        resp.render('edit-ingredient',{
            title: "Edit ingredient",
            user: req.user,
            ingredient: ingredient,
       })
    })
}
exports.editIngredient = ( req, resp, next ) =>{
    Ingredient.findById( req.params.id )
    .then( ingredient =>{ 
        resp.render('edit-ingredient', {
            title: "Edit Ingredient",
            ingredient: ingredient,
            user: req.user,
        })
    })
}
exports.newTaco = ( req, resp, next ) =>{
    if(req.user){
        Ingredient.find()
        .then( ingredients =>{
            resp.render('new-taco', {
                title: "Create new taco",
                user: req.user,
                ingredients
            });
        });
    }else{
        resp.redirect('/login');
    }
}
exports.editTaco = ( req, resp, next ) =>{
    let allIngredients
    Ingredient.find()
    .then( ingredients =>{
        allIngredients = ingredients
        return Taco.findById( req.params.id )
    })
    .then( taco =>{
        console.log('taco', taco)
        resp.render('edit-taco', {
            title: "Edit Taco",
            user: req.user,
            taco: taco,
            ingredients: allIngredients
        });
    })
}
exports.updateTaco = ( req, resp, next ) =>{
    Taco.findById( req.body.id )
    .then( taco =>{
        taco.title = req.body.title
        taco.description = req.body.description
        taco.image = req.body.image
        return taco.save()
    })
    .then( taco =>{
        resp.redirect(`/tacos/${taco.id}`)
    })
}
exports.createTaco = ( req, resp, next ) =>{
    const { ingredients } = req.body
    console.log("Ingredients", ingredients )
    Taco.create({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        ingredients: ingredients.map( id => mongoose.Types.ObjectId( id )),
        userId: req.user.id
    })
    .then( taco =>{
        resp.redirect('/create');
    })
    .catch( error =>{
        console.log('error', error)
    })
}
