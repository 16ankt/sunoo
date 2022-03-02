const favouriteServices = require('../services/favouriteServices');
const common = require('../utility/common')
module.exports.getfavourites = async (req, res) => {

    try {
        const favourite = await favouriteServices.getFavourites(req, res);
        common.sendSuccess(res, favourite);
    } catch (error) {
        common.sendError(res, error.message);

    }
}