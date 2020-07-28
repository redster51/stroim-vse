const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        required: true
    }
});

mongoose.model('Project', projectSchema);
