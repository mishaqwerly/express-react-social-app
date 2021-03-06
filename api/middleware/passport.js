const JwtStrategy = require('passport-jwt').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt
const db = require('../services/db')
const passport = require('passport');
require("dotenv").config();

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'dev-jwt';
module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      const user = db.select('*').from('users').where({id: payload.userId}).first();
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  )
}

passport.serializeUser(function(user, done) {
  /*
  From the user take just the id (to minimize the cookie size) and just pass the id of the user
  to the done callback
  PS: You dont have to do it like this its just usually done like this
  */
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  /*
  Instead of user this function usually recives the id 
  then you use the id to select the user from the db and pass the user obj to the done callback
  PS: You can later access this data in any routes in: req.user
  */
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: "http://localhost:3000/google/callback"
  },
  async function(accessToken, refreshToken, profile, done) {

    // console.log(req.user.id)
    // console.log(req.user.displayName)
    //console.log(req.user.emails[0].value)
    
    /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
    //console.log(profile)
    return done(null, profile);
  }
));
