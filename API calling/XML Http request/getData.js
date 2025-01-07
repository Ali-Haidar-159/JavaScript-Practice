"use strict"
console.clear() ;

function getData ()
{
    var xhr = new XMLHttpRequest() ;

    //request making 
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1");

    xhr.onload = function()
                {
                    var data = xhr.response ;
                    console.log(JSON.parse(data)) ;
                }

    xhr.onerror = function()
                {
                    console.log("There is an Error") ;
                }

    xhr.send() ;

}

getData() ;


