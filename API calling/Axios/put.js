"use strict"
console.clear() ;

function apiCallingUsingAxios()
{
    axios.put("https://jsonplaceholder.typicode.com/posts/10",{
        body:JSON.stringify({
            name:"anis" ,
            roll : 987 ,
            gpa : 5.00
        })
    })
    .then(function(res){console.log(res.data)}) 
    .catch(function(err){console.log(err.message)}) ;
}

apiCallingUsingAxios() ;