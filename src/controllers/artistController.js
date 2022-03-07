const common = require("../utility/common");
const Services = require('../services/index');
module.exports.create = async (req, res) => {
  try {
    const artist = await Services.artists.Create(req);
    common.sendSuccess(res, artist);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.getallartist = async (req, res) => {
  try {
    const result = await Services.artists.getallArtist(req);
    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.findbyartist = async (req, res) => {
  try {
    const result = await Services.artists.findbyArtist(req);
    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
