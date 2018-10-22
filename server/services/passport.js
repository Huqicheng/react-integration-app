const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), // find token from header
    secretOrKey: config.secret
};

// create strategy
// payload: decoded token
// done: callback function we should call after doing all of things
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // invoked when authenticate with jwt.
    // see if user id in the payload exists in our database, if it does,
    // call 'done' with that user
    // otherwise, call done without a user object
    User.findById(payload.sub, function(err, user) {
        if(err) {
            return done(err, false);
        }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

// tell passport to use this strategy
passport.use(jwtLogin);