const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
    languagename: {
        type: String
    },
    image: {
        type: String
    }
})

const Language = mongoose.model('language', languageSchema);
module.exports = Language;


