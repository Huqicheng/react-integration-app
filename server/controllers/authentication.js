const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    // subject: who is this token belong to
    // iat: issued at time
    return jwt.encode({sub: user.id, iat:timestamp}, config.secret);
}


exports.signup = function(req, res, next) {
    const email = req.body.email;
    const pwd = req.body.password;

    // See if a user with the given email exists
    // If a user with email does exist, return an error
    // If a user with email does not exist, create and save user record
    // Respond to request indicating the user was created
    User.findOne({email: email}, function(err, existingUser) {
        if(err) {
            return next(err);
        }

        if(!email || !pwd) {
            res.status(422).send({error: 'Email and Password are required.'});
        }

        if(existingUser) {
            // 422: unprocessible request
            return res.status(422).send({error: 'Email is in use'});
        }

        const newUser = new User({
            email: email,
            password: pwd
        });
        
        newUser.save(function(err) {
            if(err) {
                return next(err);
            }

            // respond success
            res.json({token: tokenForUser(newUser)});
        });


    }); 

  
};