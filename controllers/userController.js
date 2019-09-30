/*
| User Controller
*/

const User = require('../models/user');

exports.loadDefaultUser = (req, res, next) =>{
    User.findOne({name: 'Dana'})
    .then( user =>{
        if(!user){
            return User.create({name: 'Dana', bag:[] });
        }
        return user
    })
    .then( user =>{
        console.log("loading user", user)
        req.user = user;
        next();
    });

}