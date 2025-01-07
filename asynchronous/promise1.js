"use strict"
console.clear() ;

console.log("Welcome") ;


var promise1 = new Promise(function(resolve,reject){

    var result = 4 ;

    if(result === 4)
    {
        resolve("Congratulations ! you got gpa 4") ;
    }
    else
    {
        reject(new Error ("Sorry Bro")) ;
    }

}) ;

var promise2 = new Promise((resolve,reject)=>{

    var isSuccess = true ; 

    if(isSuccess)
    {
        resolve("Your mission is Successful") ;
    }
    else
    {
        reject("Mission Failed") ;
    }

}) ;


Promise.all([promise1,promise2])
// .then(([p1,p2])=>{console.log(p1)}) //array distructure
.then((r)=>{console.log(r)}) // 2tar mddhe jkono akta false hole then function ti ar kaj korbe na . tokhn only catch kaj korbe .
.catch(function(err){console.log(err)}) ;


// promise1
// .then(function(res){console.log(res)})
// .catch(function(err){console.log(err.message)}) ;

// promise2
// .then(function(res){console.log(res)}) 
// .catch(function(err){console.log(err)}) ;


console.log("End") ;