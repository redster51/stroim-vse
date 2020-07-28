const mongoose = require('mongoose');
require('../models/project-schema')
const Project = mongoose.model('Project');

module.exports.saveProject = (req, res) => {
    const project = new Project();
    project.name = req.body.name;
    project.description = req.body.description;
    project.endDate = req.body.endDate;
    project.photos = req.body.photos;
    console.log(project);

    project.save(err => {
        if(err){
            res.status(500);
            res.json(err);
        }
        res.status(200);
        res.json({"message": 'OK!'});
    });
}

module.exports.getProjects = (req, res) => {
    Project.find((err, projects) => {
        if(err){
            res.status(500);
            res.json(err);
        }
        res.status(200);
        res.json(projects);
    })
}
