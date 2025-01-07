// initial code 

"use strict"
console.clear() ;

// main code 

class Person 
{
    // instance variable  - variable member
    static name = "Ali" ;
    id = 101 ;
    mark = 90 ;

    // method member 
    static message()
    {
        console.log("This is a message method") ;
    }
}

console.log(Person.name) ;
Person.message() ;
