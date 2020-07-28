const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

module.exports.register = (req, res) => {
    const user = new User();
    user.login = req.body.login;

    user.setPassword(req.body.password);
    console.log(user);

    user.save((err) => {
        if(err) {
            res.status(500);
            res.json(err)
        }
        let token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });

};

module.exports.login = (req, res) => {
    console.log(req);
    passport.authenticate('local', (err, user, info) => {
        let token;
        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is fund
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    }, (data) => {
        console.log('CallbackFn from authController: ', data)
    })(req, res);

};
