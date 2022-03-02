const userServices = require("../services/userServices");
const common = require("../utility/common");

module.exports.login = async (req, res) => {
  try {
    const user = await userServices.Login(req.body);
    console.log(user);
    common.sendSuccess(res, user);
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.logout = async (req, res) => {
  try {
    const user = await userServices.logOut(req);
    common.sendSuccess(res, "You have been logged out successfully!");
  } catch (error) {
    common.sendError(res, error.message);
  }
};

module.exports.updateuser = async (req, res) => {
  try {
    const user = await userServices.updateUser(req);
    common.sendSuccess(res, user);
  } catch (error) {
    common.sendError(res, error.message);
  }
};
