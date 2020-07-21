const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const options = {
    usernameField: 'login'
}

passport.use(new LocalStrategy(options, (username, password, doneFn) => {
    User.findOne({login: username}, (err, user) => {
        if (err) {
            return doneFn(err);
        }
        if (!user) {
            return doneFn(null, false, {message: 'User not found!'});
        }
        if (!user.validPassword(password)) {
            return doneFn(null, false, {message: 'Password is wrong!'})
        }
        //If all ok, return User
        return doneFn(null, user);
    })
}))
