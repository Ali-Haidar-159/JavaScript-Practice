"use strict"
console.clear() ;

let api = ()=>{

    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(res){console.log(res.data)}) 
    .catch(function(){console.log(err.message)}) ;

}

api() ;