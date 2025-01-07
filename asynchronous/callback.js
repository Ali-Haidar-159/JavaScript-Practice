"use strict"
console.clear() ;

function getData (id , next) 
{
    setTimeout(() => {
        console.log("data-", id);
        next();
    }, 3000);

}

getData(1 , function fun(){
    getData(2, function fun2(){
        getData(3,function fun3(){
            getData(4 , ()=>{}) ;
        }) ;
    }) ;
}) ;
