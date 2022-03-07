const Song = require("../models/songmodel");
const Favourite = require("../models/favouritemodel");

module.exports.Create = (req) => {
    const song = Song.create({
        songname: req.body.songname,
        artistId: req.body.artistId,
        genreID: req.body.genreID,
        languageId: req.body.languageId,
        url: req.body.url,
        albumId: req.body.albumId,
        image: req.body.image,
    });
    return song;
};

module.exports.addToFavourite = async (req) => {
    const song = await Song.find({ _id: req.body._id });

    if (!song) {
        throw new Error("No song found");
    }

    const check = await Favourite.find({
        $and: [
            { songId: req.body._id },
            { userId: req.user },
        ]

    });

    if (check.length === 0) {
        const favourite = Favourite.create({
            songId: req.body._id,
            userId: req.user,
        });
        return favourite;
    } else if (check !== 0) {
        const findsong = await Favourite.findOneAndRemove({
            songId: req.body._id,
            userId: req.user,
        });
        return findsong;
    }
};
