/*
| User Controller
*/

const User = require('../models/user');

exports.loadDefaultUser = (req, res, next) =>{
    const { userId } = req.session
    if(userId){
        console.log("Loading user: ", userId);
        User.findById( userId )
        .then( user =>{
            if(!user){
                throw new Error("No User with id: ", userId);
            }
            return user
        })
        .then( user =>{
            console.log("loading user", user)
            req.session.user = user;
            next();
        });
    }else{
        next()
    }

}