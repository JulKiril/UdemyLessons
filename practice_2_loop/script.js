"use strict";
let numberOfFilms = +prompt("How many films did you watch?", "");

//3

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
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//1, 2

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

let fruits = "orange, apple, banana";
let ban = fruits.slice(14, 23);
console.log(ban);


