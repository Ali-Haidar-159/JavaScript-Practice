"use strict"
console.clear() ;

function fun1 ()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-1 is completed") ;
    }) ;
}

function fun2 ()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-2 is completed") ;
    }) ;
}

function fun3 ()
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("TASK-3 is completed") ;
        },3000) ;
    }) ;
}

function fun4 ()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-4 is completed") ;
    }) ;
}

function fun5 ()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-5 is completed") ;
    }) ;
}



// fun1() 
// .then(function(msg){console.log(msg)}) 
// .then(fun2)
// .then(function(msg){console.log(msg)}) 
// .then(fun3)
// .then(function(msg){console.log(msg)}) 
// .then(fun4)
// .then(function(msg){console.log(msg)}) 
// .then(fun5)
// .then(function(msg){console.log(msg)}) ;


// alternative of then function . await use korar karone jotokhn na fun1 er kaj ses hoi totokhn fun2 er kaj start hbe na 
async function mainFunction ()
{
    var p1 = await fun1() ;
    console.log(p1) ;

    var p2 = await fun2() ;
    console.log(p2) ;

    var p3 = await fun3() ;
    console.log(p3) ;

    var p4 = await fun4() ;
    console.log(p4) ;

    var p5 = await fun5() ;
    console.log(p5) ;
}

mainFunction() ;


