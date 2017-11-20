var moviesJSON = require('../movies.json');

//Home
exports.home = function (req, res) {

    var movies = moviesJSON.movies;

    res.render('home', {
        title : "Wong Kar-Wai Movies",
        movies : movies
    });
};

//movie_single
exports.movie_single = function (req, res) {
   // var episode_number = req.params.episode_number;

    var movie_name = req.params.movie_name;

    var movies = moviesJSON.movies;

    var title, movie;

    for (var i = 0; i < movies.length; i++) {
        if(movies[i].episode_number === movie_name){
            //title = movies[i].title;
            movie = movies[i];
            title = movie.title;
            break;
        }
    }

    var main_characters = movie.main_characters;

    res.render('movie_single', {
        movies : movies,
        title : title,
        movie : movie,
        main_characters : main_characters
    });
};

// notFound
exports.notFound = function (req, res) {

    var movies = moviesJSON.movies;

    res.render('notFound', {
        movies : movies,
        title : "I once fell in love with someone. After a while she was gone."
    });
};