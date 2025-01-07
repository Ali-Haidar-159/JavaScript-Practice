"use strict"
console.clear() ;

fetch("https://jsonplaceholder.typicode.com/posts/1" ,{

    method:"DELETE" 

})
.then(function(res){

    if(res.ok)
    {
        return res.json() ;
    }
    else
    {
        return new Error("There is an error") ;
    }

})
.then(function(res){console.log(res)}) 
.catch(function(err){console.log(err)}) ;