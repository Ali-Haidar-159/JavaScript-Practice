"use strict" 
console.clear() ;


function localStorageWork ()
{
    // console.log(localStorage) ; 

    // setData / storeData
    // localStorage.setItem("name","Ali") ;
    // localStorage.setItem("Age","22") ;

    // getData
    // var name = localStorage.getItem("name") ;
    // var age = localStorage.getItem("Age") ;
    // console.log(`your name is : ${name} and age is : ${age}`) ;

    // updateData : ali -> anis 
    // localStorage.setItem("name","Anis") ;

    // removeData
    // localStorage.removeItem("Age") ;

    // store an array type data 
    // var countries = ["Bangladesh" , "Nepal" , "Pakistan"];
    // localStorage.setItem("countries",JSON.stringify(countries)) ;

    // get an array 
    var countries = localStorage.getItem("countries") ;
    console.log(countries) ;

    var countries2 = JSON.parse(localStorage.getItem("countries")) ;
    console.log(countries2) ;

}

localStorageWork() ;