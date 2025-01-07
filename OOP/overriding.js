// initial code 

"use strict"
console.clear() ;

// main code 

class Person 
{
    message()
    {
        console.log("Hello World !!!") ;
    }
}

class Person2 extends Person 
{

    //message()

    message()
    {
        console.log("My name is Ali") ;
    }
}

let p = new Person2() ;
p.message() ;