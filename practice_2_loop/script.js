"use strict";
let numberOfFilms = +prompt("How many films did you watch?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//1

for(let i=0; i<2; i++){
    let watchedMovie = prompt("The last watched movie", ""),
        watchedMovieRate = +prompt("How will you rate the movie", "");
        personalMovieDB.movies[watchedMovie] = watchedMovieRate;
}