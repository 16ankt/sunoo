const common = require("../utility/common");
const genreServices = require("../services/genreServices");
module.exports.create = async (req, res) => {
  try {
    const genre = await genreServices.Create(req);
    common.sendSuccess(res, genre);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
module.exports.getallgenre = async (req, res) => {
  try {
    const result = await genreServices.getallGenre(req);
    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.getSongsbygenre = async (req, res) => {
  try {
    const result = await genreServices.getSongsByGenre(req);

    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
