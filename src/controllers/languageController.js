const common = require("../utility/common");
const Services = require('../services/index')
module.exports.language = async (req, res) => {
  try {
    const language = await Services.languages.Language(req);
    common.sendSuccess(res, language);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.getalllanguage = async (req, res) => {
  try {
    const result = await Services.languages.getallLanguage(req);
    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.getSongsbylanguage = async (req, res) => {
  try {
    const result = await Services.languages.getSongsByLanguage(req);

    common.sendSuccess(res, result);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

