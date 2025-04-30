// initial code 
"use strict"
console.clear() ;

// main code 

let btns = document.getElementsByClassName("btn") ;

btns = Array.from(btns) ;

// console.dir(btns) ;

// i want to add "addEventListener" in multiple component at a time 

btns.forEach(function(item){

    item.addEventListener("click" , function(){

        alert("button is clicked !!!") ;

    })

});
