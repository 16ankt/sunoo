const User = require("../models/userModel");
const validator = require("../validator/uservalidator");

module.exports.Login = async (body) => {
  await validator.userloginSchema.validateAsync(body);

  const { mobilenumber, otp } = body;

  let user = await User.findOne({ mobilenumber, isDeleted: false });
  if (!user) {
    user = await User.create({
      mobilenumber: mobilenumber,
    });
  }
  if (otp !== process.env.USER_OTP) {
    throw new Error("Invalid Credentials");
  }
  const token = await user.generateAuthToken();

  return { user, token };
};

module.exports.logOut = async (req) => {
  const user = await User.findOneAndUpdate(
    { _id: req.body._id, isDeleted: false },
    { token: null },
    { new: true }
  );
  if (!user) {
    throw new Error("Bad request");
  }
};

module.exports.updateUser = async (req) => {
  const user = await User.findOneAndUpdate(
    { _id: req.user },
    { name: req.body.name },
    { new: true }
  );
  return user;
};
