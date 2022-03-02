const common = require("../utility/common");
const languageServices = require("../services/languageServices");
module.exports.language = async (req, res) => {
  try {
    const language = await languageServices.Language(req);
    common.sendSuccess(res, language);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.getalllanguage = async (req, res) => {
  try {
    const result = await languageServices.getallLanguage(req);
    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.getSongsbylanguage = async (req, res) => {
  try {
    const result = await languageServices.getSongsByLanguage(req);

    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
