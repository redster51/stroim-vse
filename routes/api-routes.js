const express = require('express');
const router = express.Router();
// const jwt = require('express-jwt');
// const auth = jwt({
//     secret: 'MY_SECRET',
//     userProperty: 'payload'
// });

const ctrlProfile = require('../controllers/profile-сontroller');
const ctrlAuth = require('../controllers/auth-сontroller');
const ctrlProject = require('../controllers/project-controller');

// profile
router.get('/profile', ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/signin', ctrlAuth.login);

// projects
router.post('/projects', ctrlProject.saveProject);
router.get('/projects', ctrlProject.getProjects);

module.exports = router;
