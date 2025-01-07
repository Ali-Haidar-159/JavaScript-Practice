"use strict" 
console.clear() ;


function getData(id, next) {
    setTimeout(() => {
        console.log("data-", id);
        next();
    }, 3000);
}

getData(1, function() {
    console.log("data-2 is loading") ;
    getData(2, function() {
        console.log("data-3 is loading") ;
        getData(3 , function(){
            console.log("Getting data is complete") ;
        })
    });
});
