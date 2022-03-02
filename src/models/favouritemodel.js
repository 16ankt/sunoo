const mongoose = require('mongoose');

const favouriteSchema = mongoose.Schema({

    songId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Favourite = mongoose.model('favourite', favouriteSchema);

module.exports = Favourite;