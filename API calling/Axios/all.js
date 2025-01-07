"use strict"
console.clear() ; 


function apiCalling(config)
{
    return axios(config) ;
}

function getData()
{
    apiCalling("https://jsonplaceholder.typicode.com/posts/1") 
    .then(function(res){console.table(res.data)}) 
    .catch(function(err){console.log(err.message)}) ;
}
// getData() ;

function setData()
{
    apiCalling({

        url : "https://jsonplaceholder.typicode.com/posts" ,
        method : "POST" ,
        data : JSON.stringify({
            name : "anis" ,
            roll : 55 
        })

    })
    .then(function(res){console.log(res.data)}) 
    .catch(function(err){console.log(err)}) ;
}
setData() ;