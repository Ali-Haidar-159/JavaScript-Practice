// initial code 
"use strict"
console.clear() ;

// main code 

let inputField = document.getElementById("inputField") ;
let lists = document.getElementById("lists") ;
let list = document.getElementById("list") ;
let btn = document.getElementById("btn") ;
let heading = document.getElementById("heading") ;

inputField.addEventListener("change" , function(e){

    console.dir(e.target) ;

});

heading.addEventListener("click" , function(e){

    console.dir(e.target) ;

});

btn.addEventListener("click" , function(e){

    console.log(inputField.value) ;


});

lists.addEventListener("click" , function(e){

    console.dir(e.target) ;

});

// list.addEventListener("click" , function(e){

//     console.log(e.target) ;

// });