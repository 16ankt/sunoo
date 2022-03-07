const Services = require('../services/index')
const common = require('../utility/common')
module.exports.getfavourites = async (req, res) => {

    try {
        const favourite = await Services.favourites.getFavourites(req, res);
        common.sendSuccess(res, favourite);
    } catch (error) {
        common.sendError(res, error.message);

    }
}