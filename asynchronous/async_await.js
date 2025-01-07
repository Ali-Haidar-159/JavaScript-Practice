"use strict"
console.clear() ;

function getData (id)
{
    return new Promise(function(resolve,reject){
        
        setTimeout(function(){
            console.log("data-",id) ;
            resolve("this is resolved");
        }, 3000);

    }) ;
}

// async function allData ()
// {
//     await getData(1) ;
//     await getData(2) ;
//     await getData(3) ;
//     await getData(4) ;
// }
// allData() ; 

(async function (){ // IIF - immediately Invocable Function
    var p1 = await getData(1) ;
    await getData(2) ;
    await getData(3) ;
    await getData(4) ;

    console.log(p1) ;
})() ;

