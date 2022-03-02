const common = require('../utility/common');
const songServices = require('../services/songServices')
module.exports.create = async (req, res) => {

    try {
        const song = await songServices.Create(req);
        common.sendSuccess(res, song);
    } catch (error) {
        common.sendError(res, error.message);
    }
}

module.exports.addtofavourite = async (req, res) => {

    try {
        const song = await songServices.addToFavourite(req);

        common.sendSuccess(res, song);
    } catch (error) {
        common.sendError(res, error.message)
    }
}