"use strict" 
console.clear() ;

function taskOne()
{
    return new Promise(function(resolve,reject){

        resolve("TASK-1") ;

    }) ;
}

function taskTwo ()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve("TASK-2") ;
        },4000) ;
    }) ;
}

function taskThree ()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-3") ;
        // reject("Task 3 is not complete") ;
    }) ;
}

function taskFour ()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-4") ;
    }) ;
}


taskOne() 
.then(function(r){console.log(r)})
.then(taskTwo)
.then(function(r){console.log(r)})
.then(taskThree)
.then(function(r){console.log(r)})
.then(taskFour)
.then(function(r){console.log(r)}) 
.catch(function(err){console.log(err)}) ;



