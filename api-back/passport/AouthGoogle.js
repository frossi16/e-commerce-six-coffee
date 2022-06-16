const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");
const GOOGLE_CLIENT_ID =
  "769353972399-25o5lmcevofg9r6075oursv3g690ej49.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const email = profile.emails[0].value;
      const user = await UserModel.findOne({ email });

      if (user) return done(null, user);

      const newUser = await UserModel({
        fullName: profile.displayName,
        email: email,
        password: profile.id,
      }).save();

      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
