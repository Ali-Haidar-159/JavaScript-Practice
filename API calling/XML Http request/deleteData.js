"use strict"
console.clear() ;

function deleteData()
{


    var xhr = new XMLHttpRequest() ;

    xhr.open("DELETE","https://jsonplaceholder.typicode.com/posts/1") ;

    xhr.onload = function() {

        var d = xhr.response ;
        console.log(JSON.parse(d)) ;

    } ;

    xhr.onerror = function(){
        console.log("There is an error") ;
    } ;

    xhr.send() ;

}

deleteData() ;



