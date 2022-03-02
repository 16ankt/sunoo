const Genre = require("../models/genremodel");
let Model = require("../models/index");
const User = require("../models/userModel");

module.exports.Create = async (req) => {
  const genre = await Genre.create({
    genrename: req.body.genrename,
    image: req.body.image,
  });
  return genre;
};

module.exports.getallGenre = async (req) => {
  const result = Model.genres.find({});

  if (!result) {
    throw new Error("No language Found");
  }
  return result;
};

module.exports.getSongsByGenre = async (req) => {
  const result = Model.songs
    .find({ genreId: req.body._id })
    .populate("artistId");
  if (!result) {
    throw new Error("No language Found");
  }
  return result;
};
