"use strict";
//1)

let numberOfFilms = +prompt("How many films did you watch?", "");

//2

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//3

let watchedMovie = prompt("The last watched movie", ""),
    watchedMovieRate = +prompt("How will you rate the moviee", ""),
    c = prompt("The last watched movie", ""),
    d = +prompt("How will you rate the moviee", "");
personalMovieDB.movies[watchedMovie] = watchedMovieRate;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
