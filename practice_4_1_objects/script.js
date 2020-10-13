"use strict";






let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films did you watch?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count === null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("How many films did you watch?", "");  
        }
    },
    rememberMyFilms: function(){
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
    },
    writeYourGenres: function(callback){
        for (let i=0; i<3; i++){
            let a = prompt(`Your favourite 
            genre by number ${i+1}`);            

            if(a !="" && a != null){
                personalMovieDB.genres[i] = a;               
            }
            else{
                console.log("Error!");
                i--;
            }
        }
        callback();
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            alert("Ups, too little films DB");
        }
        else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            alert("You are a classic watcher");
        }
        else if(personalMovieDB.count > 30){
            alert("You are a superwatcher");
        }
        else{
            alert("Something was wrong");
        }
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false; 
            console.log(personalMovieDB.private);
        }
        else{
            personalMovieDB.private = true;
            console.log(personalMovieDB.private);  
        }
    }    
}; 
// personalMovieDB.showMyDB(personalMovieDB.private);
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres(function(){
    personalMovieDB.genres.forEach(function(item, ind) {
        console.log(`Любимый жанр ${ind+1} это ${item}`);
    });
});












