const express = require('express');
const router = express.Router();

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
router.get('/projects/', ctrlProject.getProjects);
router.put('/projects/:id', ctrlProject.updateProject);
router.delete('/projects/:id', ctrlProject.deleteProject);

// images
router.post('/images', ctrlProject.savePhotos);
router.get('/images/:id', ctrlProject.getPhoto);

module.exports = router;
