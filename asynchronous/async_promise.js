"use strict" 
console.clear() ;

// function magic ()
// {
//     return new Promise (function(resolve,reject){
//         var age = 18 ;

//         setTimeout(()=>{
            
//             resolve("Success") ;

//         },4000) ;

//     }) ;
// }



// var x = magic() ;

// console.log(x) ;

// x.then(function(r){console.log(x)}) ;


function getData (id) 
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            
            if(id===3){
                reject() ;
            }
            else{
                console.log("Getting data-",id) ; 
                resolve() ;
            }
        },4000) ;
    }) ;
}

getData(1) 
.then(function(){
    return getData(2) ;
}) 
.then(function(){
    return getData(3) ;
}) 
.then(function(){
    return getData(4) ;
})
.catch(function(){console.log("rejected")}) ;



