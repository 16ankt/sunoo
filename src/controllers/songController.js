const common = require("../utility/common");
const Services = require("../services/index");
module.exports.create = async (req, res) => {
    try {
        const song = await Services.songs.Create(req);
        common.sendSuccess(res, song);
    } catch (error) {
        common.sendError(res, error.message);
    }
};

module.exports.addtofavourite = async (req, res) => {
    try {
        const song = await Services.songs.addToFavourite(req);

        common.sendSuccess(res, song);
    } catch (error) {
        common.sendError(res, error.message);
    }
};
