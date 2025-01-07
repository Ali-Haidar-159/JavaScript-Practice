"use strict"
console.clear() ; 

function taskOne(callbackForTwo)
{
    console.log("TASK-1") ;
    callbackForTwo(taskThree) ;
}

function taskTwo(callbackForThree)
{
    console.log("TASK-2") ;
    callbackForThree(taskFour) ;
}


function taskThree(callbackForFour)
{
    setTimeout(()=>{
        console.log("TASK-3 Data is loading from API") ;
        callbackForFour(taskFive)
    },3000) ;
}


function taskFour(callbackForFive)
{
    console.log("TASK-4") ;
    callbackForFive() ;
}


function taskFive()
{
    console.log("TASK-5") ;
}

taskOne(taskTwo) ;



