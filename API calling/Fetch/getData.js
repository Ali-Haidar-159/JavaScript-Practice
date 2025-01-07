"use strict"
console.clear() ;

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method : "GET" ,

})
.then(function(result){

    if(!result.ok)
    {
        var error = `your error number is : ${result.status}` ;
        return new Error(error) ;
    }
    else
        return result.json() ;

})
.then((result) => console.log(result)) 
.catch(function (err){console.log(err)}) ;