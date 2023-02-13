const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const insertData = require('./insert-data');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://yigitemik:<password>@cluster0.ipxs6is.mongodb.net/Users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Insert all users
        // return insertData(); 
    })
    .catch(err => console.error('Could not connect to MongoDB', err));

app.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        company: req.body.company
    });
    try {
        // Check if user with same username or email already exists in database
        // const existingUser = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        // if (existingUser) {
        //   return res.status(400).send('User with the same username or email already exists.');
        // }
    
        await user.validate();
        const result = await user.save();
        res.send(result);
      } catch (ex) {
        res.status(400).send(ex.message);
      }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
