const mongoose = require('mongoose');
require('../models/project-schema')
const crypto = require('crypto');
const Project = mongoose.model('Project');

module.exports.saveProject = (req, res) => {
    const project = new Project();
    project.name = req.body.name;
    project.description = req.body.description;
    project.endDate = req.body.endDate;
    project.photos = req.body.photos;
    project.save(err => {
        if (err) {
            res.status(500);
            res.json(err);
        }
        res.status(200);
        res.json({
            "message": 'Project successfully saved!',
            status: true
        });
    });
}

module.exports.getProjects = (req, res) => {
    Project.find((err, projects) => {
        if (err) {
            res.status(500);
            res.json(err);
        }
        res.status(200);
        res.json(projects);
    })
}

module.exports.getPhoto = async (req, res) => {
    await res.sendFile(
        `/uploads/${req.params.id}.jpg`,
        {root: `${__dirname}/../`}
    );
}

module.exports.savePhotos = async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            const avatar = req.files.file;
            const hash = crypto.randomBytes(12).toString('hex');
            avatar.name = hash + '.jpg';
            await avatar.mv('./uploads/' + avatar.name);
            res.send({
                status: true,
                message: 'File is uploaded',
                link: hash,
                data: {
                    mimeType: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}
