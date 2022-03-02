const mongoose = require('mongoose');


const artistModel = mongoose.Schema({
    artistname: {
        type: String,
    },
    image: {
        type: String
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

artistModel.virtual('Song', {
    ref: 'song',
    localField: '_id',
    foreignField: 'artistId'
})
const Artist = mongoose.model('artist', artistModel);

module.exports = Artist;