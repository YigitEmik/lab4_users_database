const fs = require('fs');
const mongoose = require('mongoose');
const User = require('./user');

async function insertData() {
    try {
        // Read data from file
        const data = fs.readFileSync('./UsersData.json', 'utf8');
        const users = JSON.parse(data);

        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://yigitemik:34ygt44B@cluster0.ipxs6is.mongodb.net/Users?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Insert data into database
        await User.insertMany(users);
        console.log('Data inserted');

        // Close database connection
        await mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error(error);
    }
}

module.exports = insertData;
