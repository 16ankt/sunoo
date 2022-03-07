const Services = require("../services/index");
const common = require("../utility/common");

module.exports.recentlyplayed = async (req, res) => {
  try {
    const song = await Services.played.recentlyPlayed(req);
    common.sendSuccess(res, song);
  } catch (error) {
    res.send(error.message);
    common.sendError(res, error.message);
  }
};
module.exports.getrecentsongs = async (req, res) => {
  try {
    const song = await Services.played.getrecentlyPlayed(req);
    common.sendSuccess(res, song);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
