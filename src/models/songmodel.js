const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    songname: {
        type: String
    },
    artistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artist'
    },
    languageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'language'
    },
    genreID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genre'
    },
    albumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'album'
    },
    url: {
        type: String
    },
    image: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
})

const Song = mongoose.model('song', songSchema);
module.exports = Song;
