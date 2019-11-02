/**
|--------------------------------------------------
| Authentication controller
| Dana Simmons 2019
|--------------------------------------------------
*/

const User = require('../models/user');

exports.loginForm = ( req, res, next ) => {
  res.render( 'login', {
    title: "Log in please",
    user: req.session.user
  })
}

exports.authenticate = ( req, res, next ) =>{
  User.findOne({name: req.body.userName })
  .then( user => {
    req.session.user = user;
    console.log('setting session cookie..')
    res.redirect('/')

  })
}

exports.logout = ( req, res, next ) => {
  console.log("Clearing user id");
  req.session.destroy( ( err ) =>{
    console.log('err:', err)
    res.redirect('/');
  }); // blow it up!
}