"use strict";


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test');
    }
};
options.makeTest();
const {border, bg} = options.colors;
console.log(bg);
    

//  for (let key in options){
     
//      if(typeof(options[key]) === "object"){
//          for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
   
//          }
//      }
//      else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);

//      }   
     
//  }

//////////////////////////Object.keys
console.log(Object.keys(options).length);
let str = prompt("", "");
let products = str.split(",");
console.log(products.join(";"));


function objectCopy(mainObject){
    let newObject = {};
    for(let key in mainObject){
        newObject[key] = mainObject[key];
    }
    return newObject;
}

let fruits = {
    sort: 'apple',
    color: 'green',
    size: 10,
    taste: {
        sweet: 5,
        notSweet: 3
    }
};

let fruitsNew = objectCopy(fruits);
fruitsNew["size"] = 5;
console.log(fruitsNew);
console.log(fruits);
