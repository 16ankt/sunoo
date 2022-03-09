const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({

    songId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Like = mongoose.model('like', likeSchema);

module.exports = Like;