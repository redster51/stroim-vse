const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "MY_SECRET";

const userSchema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};

userSchema.methods.validPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    expiry = (expiry.getTime() / 1000).toString();
    const payload = {
        _id: this._id,
        login: this.login,
        exp: parseInt(expiry)
    }
    return jwt.sign(payload, SECRET_KEY);
}

mongoose.model('User', userSchema);
