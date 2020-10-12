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
