const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
// define the User model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// pre trigger
userSchema.pre('save', function(next) {
    const user = this;

    // generate the salt
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) {return next(err);}
            user.password = hash;
            next();
        })
    });

});

// create Model class
const UserClass = mongoose.model('user', userSchema);

//export the model
module.exports = UserClass;