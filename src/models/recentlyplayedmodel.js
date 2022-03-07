const mongoose = require('mongoose');

const recentlyPlayed = mongoose.Schema({

    ArtistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artist'
    },
    SongId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

const Played = mongoose.model('recentlyplayed', recentlyPlayed);

module.exports = Played;