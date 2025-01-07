// initial code 
"use strict"
console.clear()

// main code 
class Person 
{
    name = "Ali" ;
    age = 22 ;

    magic ()
    {
        console.log("Hello World !!!") ;
    }

}

class Teacher extends Person
{
    // name , age , magic()
    salary = 25000 ;
}

let t1 = new Teacher() ;
console.table(t1) ;
t1.magic();