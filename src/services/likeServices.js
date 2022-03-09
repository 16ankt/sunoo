
const Model = require("../models/index");

module.exports.LikedSong = async (req, res) => {
    const song = await Model.songs.findOne({ _id: req.body.songId });

    if (!song) {
        throw new Error("Song not Found");
    }

    let count = song.likes;
    const check = await Model.likes.findOne({
        $and: [{ songId: req.body.songId }, { userId: req.user }],
    });

    if (check === null) {
        const liked = await Model.likes.create({
            songId: req.body.songId,
            userId: req.user,
        });
        console.log(liked)
        const song1 = await Model.songs.findOneAndUpdate(
            { _id: req.body.songId },
            { likes: count + 1 },
            { new: true }
        );
        return song1;
    } else if (check !== null) {
        const decreasecount = await Model.songs.findOneAndUpdate(
            { _id: req.body.songId },
            { likes: count - 1 },
            { new: true }
        );
        const song1 = await Model.likes.findOneAndRemove({
            songId: req.body.songId,
            userId: req.user,
        });

        return decreasecount;
    }
};


