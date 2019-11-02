/*
| User Controller
*/

const User = require('../models/user');

exports.loadDefaultUser = (req, res, next) =>{
    const { user } = req.session
    if(user){
        console.log("Loading user: ", user);
        User.findById( user._id )
        .then( user =>{
            if(!user){
                throw new Error("Can't find user");
            }
            return user
        })
        .then( user =>{
            console.log("Found user: ", user)
            req.user = user;
            next();
        });
    }else{
        next()
    }

}