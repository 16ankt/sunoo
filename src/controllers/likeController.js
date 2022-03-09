const Services = require('../services/index');
const common = require('../utility/common')
module.exports.liked = async (req, res) => {
    try {
        const like = await Services.likes.LikedSong(req);
        common.sendSuccess(res, like)
    } catch (error) {
        common.sendError(res, error.message);
    }
}

