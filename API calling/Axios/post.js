"use strict"
console.clear() ;

function apiCallingUsingAxios ()
{
    axios.post("https://jsonplaceholder.typicode.com/posts",{
        body : JSON.stringify({
            name:"Ali" ,
            age : 22 , 
            Id:200 ,
            history : "my name is Ali" 
        })
    })
    .then(function(res){console.log(res.data)}) 
    .catch(function(err){console.log(err)}) ;
}

apiCallingUsingAxios() ;