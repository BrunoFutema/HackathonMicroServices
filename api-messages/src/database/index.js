const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/usersAuth', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;