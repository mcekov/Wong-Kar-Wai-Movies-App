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
    var movie_name = req.params.movie_name;
    res.send("This is the page for movie " + movie_name);
};

// notFound
exports.notFound = function (req, res) {
    res.send("Oops something get wrong");
};