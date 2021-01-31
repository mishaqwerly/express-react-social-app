const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const db = require('../services/db')

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'dev-jwt';
module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await db.select('*').from('users').where({id: payload.userId}).first();
        if (user) {
          done(null, user)
        } else {
          done(null, false)
        }
      } catch (error) {
        console.log(error)
      }    
    })
  )
}