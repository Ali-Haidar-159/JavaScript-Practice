"use strict"
console.clear() ;

function taskOne(fun)
{
    console.log("TASK-1") ;
    fun() ;
}

function taskTwo(fun)
{
    setTimeout(function(){
        console.log("TASK-2") ;
        fun() ;
    },4000) ;
}

function taskThree(fun)
{
    console.log("TASK-3") ;
    fun() ;
}

function taskFour()
{
    console.log("TASK-4") ;
}


taskOne(function f1(){
    taskTwo(function f2 (){
        taskThree(function f3 (){
            taskFour() ;
        }) ;
    }) ;
}) ;

