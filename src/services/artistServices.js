const Artist = require("../models/aritstmodel");
let Model = require("../models/index");
module.exports.Create = async (req) => {
  const artist = await Artist.create({
    artistname: req.body.artistname,
    image: req.body.image,
  });
  return artist;
};

module.exports.findbyArtist = async (req) => {
  const output = await Model.songs
    .find({ artistId: req.body._id })
    .populate("artistId");

  if (!output) {
    throw new Error("No songs found");
  }
  return output;
};

module.exports.getallArtist = async (req) => {
  const artist = await Model.artists.find({});
  if (!artist) {
    throw new Error("No songs found");
  }
  return artist;
};
