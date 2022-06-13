const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/index') 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Ejecuto cookies 
app.use(cookieParser())

app.use(session({
  secret: 'six-coffee',
  resave: true,
  saveUninitialized: true,

}))

app.use(passport.initialize())
app.use(passport.session())


//LocalEstrategy
passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password",
},
  function (email, password, done) {
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username ' })
        }
        if (!user.comparePassword(password)) {
          return done(null, false, { message: 'Incorrect username ' })
        }
        return done(done)
      })
      .catch(done)

  }
))


// How we save the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// How we look for the user
passport.deserializeUser(function (id, done) {
  Users.findById(id)
    .then(user => done(null, user))
    .catch(done)
});

module.export = passport