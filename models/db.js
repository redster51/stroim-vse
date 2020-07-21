const mongoose = require('mongoose');
let gracefulShutdown;
const dbURI = 'mongodb+srv://mongoDBAdmin:222149id@stroimvsedb-gwq8b.mongodb.net/stroimvsedb-gwq8b?retryWrites=true&w=majority';
const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(dbURI, connectionConfig);

mongoose.connection.on('connected', () => console.log('Mongoose succeed connected to DB!'));
mongoose.connection.on('error', (error) => console.log('Mongoose connection error: ' + error));
mongoose.connection.on('disconnected', () => console.warn('Mongoose disconnected!'));

gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
}

//Nodemon restart for mongoose
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//App termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

//Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app termination', () => {
        process.exit(0);
    });
});

require('./user-schema');
