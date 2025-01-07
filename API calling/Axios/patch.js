"use strict"
console.clear() ;

var api = ()=>{

    axios.patch("https://jsonplaceholder.typicode.com/posts/1",{

        body : JSON.stringify({
            name:"Anis" ,
            gpa : 5.00
        })

    })
    .then(function(res){console.log(res.data)}) 
    .catch(function(err){console.log(err.message)}) ;


}

api() ;