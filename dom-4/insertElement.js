"use strict" 
console.clear() ;

let heading = document.querySelector("#heading") ;
// console.dir(heading) ;
let para = document.querySelector("p") ;
// console.dir(para) ;

let btn = document.createElement("button") ;
let btnName = document.createTextNode("submit") ;
btn.appendChild(btnName) ;
// console.dir(btn) ; 

btn.style.backgroundColor = "red" ;
btn.style.color = "white" ;

let body = document.querySelector("body") ;
// body.insertBefore(btn,heading) ;
// body.appendChild(btn) ;
body.prepend(btn);

