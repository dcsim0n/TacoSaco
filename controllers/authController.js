/**
|--------------------------------------------------
| Authentication controller
| Dana Simmons 2019
|--------------------------------------------------
*/

const User = require("../models/user");
const bcrypt = require('bcrypt');
const assert = require('assert');

exports.loginForm = (req, res, next) => {
  res.render("login", {
    title: "Log in please",
    user: req.user
  });
};

exports.authenticate = (req, res, next) => {
  User.findOne({ name: req.body.userName }).then(user => {
    
    assert(user, "No user found");
    
    bcrypt.compare(req.body.password, user.password).
    then( isAuthenticated =>{
    
      assert(isAuthenticated, "Bad username or password");
    
      req.session.user = user;
      req.session.save(err => {
        //wait for session to be created before redirect
        console.log("setting session cookie..");
        res.redirect("/");
    
      }); 
    });
  })
  .catch( error =>{
    console.log('error', error);
    res.redirect('/login');
  });
};

exports.logout = (req, res, next) => {
  console.log("Clearing user id");
  req.session.destroy(err => {
    console.log("err:", err);
    res.redirect("/");
  }); // blow it up!
};
