const Joi = require("joi");


module.exports.userloginSchema = Joi.object({
    name: Joi.string(),
    mobilenumber: Joi.string().length(10).required(),
    token: Joi.string(),
    otp: Joi.number().required(),
});

