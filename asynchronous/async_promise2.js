"use strict"
console.clear() ;


function getData1 ()
{
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Data1...") ;
            resolve() ;
        },4000) ;

    }) ;
}

function getData2 ()
{
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Data2...") ;
            resolve() ;
        },4000) ;

    }) ;
}

function getData3 ()
{
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Data3...") ;
            resolve() ;
        },4000) ;

    }) ;
}


// var p1 = getData1() ;
// p1.then(function(){
//     var p2 = getData2() ;
//     p2.then(function(){
//         var p3 = getData3() ;
//         p3.then(function(){}) ;
//     }) ;
// }) ;

getData1()
.then(getData2) 
.then(getData3) 
