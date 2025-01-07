"use strict" 
console.clear() ;

fetch("https://jsonplaceholder.typicode.com/posts/1",{

    method:"PATCH" ,
    body : JSON.stringify({

        versity : "East West University" ,
        title : "Nothing" ,
        dept : "CSE"

    }) ,

    headers : {
        "content-type" : "application/json" 
    }

})
.then(function(result){

    if(result.ok)
    {
        return result.json() ;
    }
    else
    {
        return new Error ("There is an Error") ;
    }

}) 
.then(function(result){console.log(result)})
.catch(function(err){console.log(err)}) ;