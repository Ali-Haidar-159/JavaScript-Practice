"use strict"
console.clear() ;

function updateSingleData(toDo,link,updatedData)
{   
    var xhr = new XMLHttpRequest () ;

    // making request 
    xhr.open(toDo,link) ;

    xhr.setRequestHeader("content-type","application/json") ;

    xhr.onload = function(){

        var d = xhr.response ;
        console.log(JSON.parse(d)) ;

    } ;

    xhr.onerror = function (){
        console.log("There is an error") ;
    } ;

    xhr.send(JSON.stringify(updatedData)) ;

}


function makingRequest ()
{
    let updatedData = {
        body : "this is body"  ,
        title : "this is title" ,
        name : "ali" // add a new property
    } ;

    updateSingleData("PATCH","https://jsonplaceholder.typicode.com/posts/99",updatedData) ;
}

makingRequest() ;

