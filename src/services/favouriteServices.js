const Favourite = require("../models/favouritemodel");

module.exports.getFavourites = (req, res) => {
  const favourite = Favourite.find({ userId: req.body._id }).populate({
    path: "songId",
    populate: {
      path: "artistId",
    },
  });
  return favourite;
};
