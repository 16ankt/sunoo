const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, (error) => {
    if (error) {
        return console.log('Error connecting to MongoDB \n ' + error);
    }
    console.log('Connected to Database :: MongoDB')
})
