const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const session = require("express-session");

app.use(
  session({
    secret: "six-coffee",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email: email });
      console.log(user);
      try {
        if (!user) {
          return done(null, false); // user not found
        }

        if (!user.comparePassword(password)) {
          return done(null, false);
        }
        return done(null, user);
        //   user.hash(password, user.salt).then((hash) => {
        //     if (hash !== user.password) {
        //       return done(null, false); // invalid password
        //     }
        //     return done(null, user); // success 😄
        //   });
      } catch (error) {
        console.log(error);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// passport.use('local-signup', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true
// }, async (req, email, password, done) => {
//   const user = await User.findOne({'email': email})
//   console.log(user)
//   if(user) {
//     return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
//   } else {
//     const newUser = new User();
//     newUser.email = email;
//     newUser.password = newUser.encryptPassword(password);
//   console.log(newUser)
//     await newUser.save();
//     done(null, newUser);
//   }
// }));

// passport.use('local-signin', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true
// }, async (req, email, password, done) => {
//   const user = await User.findOne({email: email});
//   if(!user) {
//     return done(null, false, req.flash('signinMessage', 'No User Found'));
//   }
//   if(!user.comparePassword(password)) {
//     return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
//   }
//   return done(null, user);
// }));
