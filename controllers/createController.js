/*
| Controller for creating ingreaients and tacos
*/
const Ingredient = require('../models/ingredient');
const Taco = require('../models/taco');

exports.createMenu = ( req, resp, next ) =>{
    resp.render('menu', {
        title: "Your Menue",
        user: req.user
    })
}
exports.createIngredient = ( req, resp, next ) =>{
    Ingredient.create({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        userId: req.user.id
    })
    .then( ingredient =>{
        resp.redirect('/create');
    })
}
exports.newTaco = ( req, resp, next ) =>{
    Ingredient.find()
    .then( ingredients =>{
        resp.render('new-taco', {
            title: "Create new taco",
            user: req.user,
            ingredients
        });
    })
}
exports.createTaco = ( req, resp, next ) =>{
    console.log("Ingredients", req.body.ingredients)
    Taco.create({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        ingredients: [...req.body.ingredients],
        userId: req.user.id
    })
    .then( taco =>{
        resp.redirect('/create');
    })
}
exports.newIngredient = ( req, resp, next ) =>{
    resp.render('new-ingredient',{
        title: "Create new Ingredient",
        user: req.user
    });
}