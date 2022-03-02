const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({

    albumname: {
        type: String
    },
    artistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artist'
    }
})

const Album = mongoose.model('album', albumSchema);
module.exports = Album;