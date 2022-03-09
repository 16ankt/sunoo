
module.exports = {
    artists: require('./artistController'),
    favourites: require('./favouriteController'),
    genres: require('./genreController'),
    languages: require('./languageController'),
    songs: require('./songController'),
    users: require('./usercontroller'),
    played: require('./recentlyPlayedController'),
    likes: require('../controllers/likeController')
}