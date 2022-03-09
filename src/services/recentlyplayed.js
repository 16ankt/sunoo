const Model = require("../models/index");

module.exports.recentlyPlayed = async (req, res) => {
    let song = await Model.songs.find({ _id: req.body._id });
    if (!song) {
        throw new Error("No song found");
    }

    const check = await Model.played.find({
        songId: req.body._id,
        userId: req.user,
    });
    if (check.length === 0) {
        const createsong = await Model.played.create({
            ArtistId: req.body.ArtistId,
            SongId: req.body.SongId,
            userId: req.user,
        });
        return createsong;
    } else if (check.length !== 0) {
        let findsong = await Model.played.findOneAndRemove({
            $and: [
                { songId: req.body.songId },
                { userId: req.user },
                { ArtistId: req.body.ArtistId },
            ],
        });


        const updatedsong = await Model.played.create({
            ArtistId: req.body.ArtistId,
            SongId: req.body.SongId,
            userId: req.user,
        });
        return updatedsong;
    }
};

module.exports.getrecentlyPlayed = async (req, res) => {
    const songs = Model.played
        .find({ userId: req.user }).sort({ 'createdAt': -1 })
        .populate("SongId")
        .populate("ArtistId");

    if (!songs) {
        throw new Error(" NO Songs Found");
    }
    return songs;
};
