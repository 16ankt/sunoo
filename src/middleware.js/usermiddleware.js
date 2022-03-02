const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const common = require("../utility/common");
const usermiddleware = require('../middleware.js/usermiddleware')

const generateToken = (req) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    return token;
};

const generateDecodedToken = async (token) => {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
};

const authenticateUser = async (req, res, next) => {
    try {
        const token = generateToken(req);
        const decodedToken = await generateDecodedToken(token);

        const user = await User.findOne({ token: token });

        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user._id;

        next();
    } catch (error) {
        common.sendError(res, "Please Authenticate!");
    }
};

module.exports = {
    authenticateUser,
};
