"use strict" 
console.clear() ;

let promise = new Promise (function(resolve,reject){
    let isSuccess = false ; 

    if(isSuccess)
    {
        resolve("Your plan is success") ;
    }
    else
    {
        reject("REJECTED") ; // returns an error 
    }

}) ;

console.log(promise) ;

promise
.then(function(res){console.log(res)})  
.catch(function(err){console.log(err)})
.finally(function(){console.log("This is finally block")}) ;

