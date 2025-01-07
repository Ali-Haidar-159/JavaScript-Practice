"use strict"
console.clear() ;

function taskOne()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-1 is complete") ;
    }) ;
}

function taskTwo()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-2 is complete") ;
    }) ;
}

function taskThree()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("TASK-3 is complete") ;
        },3000) ;
    }) ;
}

function taskFour()
{
    return new Promise(function(resolve,reject){
        reject("TASK-4 is not complete") ;
    }) ;
}

function taskFive()
{
    return new Promise(function(resolve,reject){
        resolve("TASK-5 is complete") ;
    }) ;
}


taskOne()
.then(function(msg){console.log(msg)}) 
.then(taskTwo)
.then(function(msg){console.log(msg)})
.then(taskThree)
.then(function(msg){console.log(msg)})
.then(taskFour)
.then(function(msg){console.log(msg)})
.then(taskFive)
.then(function(msg){console.log(msg)})
.catch(function(error){console.log(error)}) ;