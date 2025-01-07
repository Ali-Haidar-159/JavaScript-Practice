"use strict"
console.clear() ;

function practiceSessionStorage()
{

    // console.log(sessionStorage) ;

    // storeData 
    // sessionStorage.setItem("name","Ali") ;
    // sessionStorage.setItem("marks","110") ;

    // removeData 
    // sessionStorage.removeItem("Id") ;

    // getData
    // var name = sessionStorage.getItem("name") ;
    // console.log(`Your name is : ${name}`) ;

    // updateData : ali -> anis
    // sessionStorage.setItem("name","anis") ;

    // set & get an Array in session storage
    // var countries = ["Bangladesh" , "Nepal" , "China"] ;
    // sessionStorage.setItem("countries" , JSON.stringify(countries)) ;

    // var countryName = JSON.parse(sessionStorage.getItem("countries")) ;
    // console.log(countryName) ;

    // set & get an Object in session storage
    var student = {
        name: "ali" ,
        age : 22 , 
        gpa : 5.00 
    } ;

    sessionStorage.setItem("student" , JSON.stringify(student)) ;

    var std = JSON.parse(sessionStorage.getItem("student")) ;
    console.log(std) ;

}

practiceSessionStorage() ;