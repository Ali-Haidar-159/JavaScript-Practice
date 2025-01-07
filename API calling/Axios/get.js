"use strict"
console.clear() ;

function apiCallingUsingAxios ()
{
    // console.log(window) ; 

    axios.get("https://jsonplaceholder.typicode.com/posts") 
    .then(function(res){console.table(res.data)}) 
    .catch(function(err){console.log(err)}) ;
}

apiCallingUsingAxios() ;