const authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// don't use cookie based passport
const requireAuth = passport.authenticate('jwt', {session: false});

module.exports = function(app) {
    app.get('/', requireAuth, function(req,res,next) {
        res.send(['waterbottle','phone','paper']);
    }); 
    
    app.post('/signup', authentication.signup);
}