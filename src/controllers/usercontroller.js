const common = require("../utility/common");
const Services = require('../services/index');
const Validator = require('../validator/index')
module.exports.login = async (req, res) => {
  try {
    await Validator.users.userloginSchema.validateAsync(req.body);
    const user = await Services.users.Login(req.body);
    common.sendSuccess(res, user);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.logout = async (req, res) => {
  try {
    const user = await Services.users.logOut(req);
    common.sendSuccess(res, "You have been logged out successfully!");
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.updateuser = async (req, res) => {
  try {
    const user = await Services.users.updateUser(req);
    common.sendSuccess(res, user);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.userlikedsongs = async (req, res) => {

  try {
    const songs = await Services.users.userLikedSongs(req);
    common.sendSuccess(res, songs);
  } catch (error) {
    common.sendError(res, error.message)
  }
}

module.exports.alllikedsongs = async (req, res) => {

  try {
    const songs = await Services.users.allLikedSongs(req);
    common.sendSuccess(res, songs);
  } catch (error) {
    common.sendError(res, error.message)
  }
}