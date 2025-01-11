// initial code 

"use strict"
console.clear()

// main code 

let number1 = document.getElementById("number1") ;
let number2 = document.getElementById("number2") ;
let number3 = document.getElementById("number3") ;
let result = document.getElementById("result") ;
let btn = document.getElementById("btn") ;

btn.addEventListener("click",function(){

    let n1 = number1.value ;
    let n2 = number2.value ;
    let n3 = number3.value ;

    getCalculate(n1 , n2 , n3) ;

}) ;

function getCalculate(n1,n2,n3)
{
    let sum = Number(n1) + Number(n2) + Number(n3) ;

    result.innerHTML = "Result is : " + sum ;

}