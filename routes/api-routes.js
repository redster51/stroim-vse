const express = require('express');
const router = express.Router();
// const jwt = require('express-jwt');
// const auth = jwt({
//     secret: 'MY_SECRET',
//     userProperty: 'payload'
// });

const ctrlProfile = require('../controllers/profile-сontroller');
const ctrlAuth = require('../controllers/auth-сontroller');

// profile
router.get('/profile', ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/signin', ctrlAuth.login);

module.exports = router;
