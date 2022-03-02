const mongoose = require('mongoose');


const genreModel = mongoose.Schema({
    genrename: {
        type: String,
    },
    image: {
        type: String
    }
})

const Genre = mongoose.model('genre', genreModel);

module.exports = Genre;