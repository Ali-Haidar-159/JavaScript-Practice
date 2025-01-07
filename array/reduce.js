"use strict" 
console.clear() ;

var arr = [1, 2, 3, 4, 5] ;

console.log(`The original array is : ${arr}`) ;

var value = arr.reduce(function(result, currentValue){
    return result + currentValue ;
}) ;

console.log("The sum is : ",value) ;