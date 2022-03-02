const common = require("../utility/common");
const artistServices = require("../services/artistServices");

module.exports.create = async (req, res) => {
  try {
    const artist = await artistServices.Create(req);
    common.sendSuccess(res, artist);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.getallartist = async (req, res) => {
  try {
    const result = await artistServices.getallArtist(req);
    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }

  common.sendSuccess(res, artist);
};

module.exports.findbyartist = async (req, res) => {
  try {
    const result = await artistServices.findbyArtist(req);
    console.log(result);
    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
