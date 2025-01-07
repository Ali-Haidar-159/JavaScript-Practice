"use strict" 
console.clear() ; 

/*async*/ function apiCalling(config) 
{
    return /*await*/ axios(config) ;
}

function getData ()
{
    apiCalling({
        url : "https://jsonplaceholder.typicode.com/posts/1"  ,
        method : "GET" 
    })
    .then(function(r){console.table(r.data)}) 
    .catch(function(err){console.log(err.message)}) ;
}
// getData() ;

function setData()
{
    apiCalling({
        url:"https://jsonplaceholder.typicode.com/posts" ,
        method : "POST" ,
        data : JSON.stringify({
            name:"Ali" ,
            roll:5155 
        }) 
    })
    .then(function(res){console.table(res.data)}) 
    .catch(function(err){console.log(err)}) ;
}
// setData() ;


function putData()
{
    apiCalling({
        url:"https://jsonplaceholder.typicode.com/posts/1" ,
        method : "PUT" ,
        data : JSON.stringify({
            name:"Ali" ,
            roll:5155 
        }) 
    })
    .then(function(res){console.table(res.data)}) 
    .catch(function(err){console.log(err)}) ;
}
// putData() ;

function patchData()
{
    apiCalling({
        url:"https://jsonplaceholder.typicode.com/posts/1" ,
        method : "PATCH" ,
        data : JSON.stringify({
            name:"Ali" ,
            roll:5155 
        }) 
    })
    .then(function(res){console.table(res.data)}) 
    .catch(function(err){console.log(err)}) ;
}
// patchData() ;

function deleteData()
{
    apiCalling({
        url:"https://jsonplaceholder.typicode.com/posts/1" ,
        method : "DELETE" 
        }) 
    .then(function(res){console.table(res.data)}) 
    .catch(function(err){console.log(err)}) ;
}
// deleteData() ;


