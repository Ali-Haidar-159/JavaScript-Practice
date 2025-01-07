//basic work 
"use strict"
console.clear() ;

function sendData()
{
    var xhr = new XMLHttpRequest() ;

    //making request
    xhr.open("POST" , "https://jsonplaceholder.typicode.com/posts") ; 

    //what is the type of my sending data 
    xhr.setRequestHeader("content-type","application/json") ;

    xhr.onload = function(){
        var d = xhr.response ;
        console.log(JSON.parse(d)) ;
    }

    //if there is an error then what to do 
    xhr.onerror = function (){
        console.log("Ops there is an error !!!") ;
    }

    var data = {
        title : "JavaScript" ,
        body : "my-body" ,
        userId : 101 ,
    } ;

    xhr.send(JSON.stringify(data)) ;

}

sendData() ;