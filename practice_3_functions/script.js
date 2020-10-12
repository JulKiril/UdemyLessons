"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films did you watch?", "");

    while (numberOfFilms == "" || numberOfFilms === null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films did you watch?", "");  
    }
}
start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
}; 

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for (let i=0; i<3; i++){
        personalMovieDB.genres[i] = prompt(`Your favourite genre by number ${i+1}`);
    }
}
writeYourGenres();
console.log(personalMovieDB);
function rememberMyFilms(){
    for(let i=0; i<2; i++){
        let a = prompt("The last watched movie", ""),
            b = +prompt("How will you rate the movie", "");
    
            if (a != "" && b != "" && a != null && b != null && a.length < 50)
            {
                console.log("Good!");
                personalMovieDB.movies[a] = b;
            }
            else {    
                console.log("Error!");
                i--;
            }
    }
}
// rememberMyFilms();
function detectPersonalLevel(){
    if(numberOfFilms < 10){
        alert("Ups, too little films DB");
    }
    else if(numberOfFilms >= 10 && numberOfFilms <= 30){
        alert("You are a classic watcher");
    }
    else if(numberOfFilms > 30){
        alert("You are a superwatcher");
    }
    else{
        alert("Something was wrong");
    }
}
// detectPersonalLevel();



