"use strict"
console.clear() ;

fetch("https://jsonplaceholder.typicode.com/posts",{

    method : "POST" ,
    body : JSON.stringify({
        name : "ali",
        age : 22 , 
        gpa : 5.00 
    }) ,
    headers : {
        "content-type" : "application/json ; charset=UTF-8 " 
    } ,
}) 
.then(function(result){

    if(result.ok)
    {
        return result.json() ;
    }
    else
    {
        return new Error("There is an error : ",result.status) ;
    }

})
.then(function(result){console.log(result)}) 
.catch(function(err){console.log(err)}) ;