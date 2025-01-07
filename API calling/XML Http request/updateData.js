"use strict"
console.clear() ;

function updateData()
{

    var xhr = new XMLHttpRequest() ;

    // making request 
    xhr.open("PUT","https://jsonplaceholder.typicode.com/posts/99") ;

    xhr.setRequestHeader("content-type","application/json");

    xhr.onload = function(){
        var d = xhr.response ;
        console.log(JSON.parse(d)) ;
    }

    xhr.onerror = function (){
        console.log("There is an error") ;
    }

    var updatedData = {
        id:99 ,
        title: 'teacher',
        body: 'East West University',
        userId: 99,
    }

    xhr.send(JSON.stringify(updatedData)) ;

}

updateData() ;