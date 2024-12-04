const mongoose = require('mongoose');
// Connect to MongoDB
function connectToDb() {
    mongoose.connect('mongodb://localhost/myDatabase',)
        .then(() => console.log('Connected to MongoDB')).catch(err => console.log('Error connecting to MongoDB'))
}
module.exports = connectToDb;
