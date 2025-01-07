"use strict"
console.clear() ;

let prices = [250,645,300,900,50] ;

console.log(`The original price is : ${prices}`) ;

prices = prices.map(function(item){

    let discountAmount = item * 0.1 ;
    let discountPrice = item - discountAmount ;
    
    return discountPrice ;

}) ;

console.log(`After discount price is : ${prices}`) ;
