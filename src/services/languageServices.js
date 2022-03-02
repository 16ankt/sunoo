let Model = require("../models/index");

module.exports.Language = async (req, res) => {
  const language = Language.create({
    languagename: req.body.languagename,
    image: req.body.image,
  });
  return language;
};

module.exports.getallLanguage = async (req) => {
  const result = Model.languages.find({});

  if (!result) {
    throw new Error("No language Found");
  }
  return result;
};

module.exports.getSongsByLanguage = async (req) => {
  const result = Model.songs
    .find({ languageId: req.body._id })
    .populate("artistId")
    .populate("languageId");
  if (!result) {
    throw new Error("No language Found");
  }
  return result;
};
