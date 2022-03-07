const common = require("../utility/common");
const Services = require("../services/index");

module.exports.create = async (req, res) => {
  try {
    const genre = await Services.genres.Create(req);
    common.sendSuccess(res, genre);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
module.exports.getallgenre = async (req, res) => {
  try {
    const result = await Services.genres.getallGenre(req);
    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
module.exports.getSongsbygenre = async (req, res) => {
  try {
    const result = await Services.genres.getSongsByGenre(req);

    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
