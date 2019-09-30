/*
| Controller for creating ingreaients and tacos
*/

exports.createMenu = ( req, resp, next ) =>{
    resp.render('menu', {
        title: "Your Menue",
        user: req.user
    })
}
exports.createIngredient = ( req, resp, next ) =>{
    
}
exports.newIngredient = ( req, resp, next ) =>{
    resp.render('new-ingredient',{
        title: "Create new Ingredient",
        user: req.user
    });
}