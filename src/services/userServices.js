const User = require("../models/userModel");
const Model = require('../models/index')
const validator = require("../validator/uservalidator");

module.exports.Login = async (body) => {
  await validator.userloginSchema.validateAsync(body);

  const { mobilenumber, otp } = body;

  let user = await Model.users.findOne({ mobilenumber, isDeleted: false });
  if (!user) {
    user = await User.create({
      mobilenumber: mobilenumber,
    });
  }
  if (otp !== process.env.USER_OTP) {
    throw new Error("Invalid Credentials");
  }
  const token = await user.generateAuthToken();

  return { user, token };
};

module.exports.logOut = async (req) => {
  const user = await Model.users.findOneAndUpdate(
    { _id: req.user, isDeleted: false },
    { token: null },
    { new: true }
  );
  if (!user) {
    throw new Error("Bad request");
  }
};

module.exports.updateUser = async (req) => {
  const user = await Model.users.findOneAndUpdate(
    { _id: req.user },
    { name: req.body.name },
    { new: true }
  );
  return user;
};

module.exports.userLikedSongs = async (req, res) => {
  console.log(req)
  const songs = await Model.likes.find({ userId: req.user }).populate({
    path: 'songId',
    populate: {
      path: 'artistId'
    }
  });
  console.log(songs)
  if (!songs) {
    throw new Error("No liked songs");
  }
  return songs;
}

module.exports.allLikedSongs = async (req, res) => {
  const songs = await Model.songs.find({}).sort({ likes: -1 });
  console.log(songs)
  if (!songs) {
    throw new Error("No liked songs");
  }
  return songs;

}