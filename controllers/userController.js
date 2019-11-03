/*
| User Controller
*/

const User = require("../models/user");
const assert = require("assert");
const bcrypt = require("bcrypt");

exports.loadDefaultUser = (req, res, next) => {
  const { user } = req.session;
  if (user) {
    console.log("Loading user: ", user);
    User.findById(user._id).then(user => {
      console.log("Found user: ", user);
      req.user = user;
      next();
    });
  } else {
    next();
  }
};

exports.signUpForm = (req, res, next) => {
  res.render("signup", {
    title: "Sign up for Taco Saco",
    user: req.user
  });
};

exports.createUser = (req, res, next) => {
  const { name, password, passwordConfirm } = req.body;
  if (password !== passwordConfirm) {
    console.log("Passwords don't match!");
    return res.redirect("/signup");
  }
  bcrypt
    .hash(password, 12)
    .then(passHash => {
      return User.create({
        name,
        password: passHash,
        bag: []
      });
    })
    .then(user => {
      req.session.user = user;
      req.session.save(err => {
        //wait for session to be created before redirect
        console.log("setting session cookie..");
        res.redirect("/");
      });
    })
    .catch(error => {
      console.log("error", error);
    });
};
