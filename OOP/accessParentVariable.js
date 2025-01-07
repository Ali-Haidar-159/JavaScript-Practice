// initial code 

"use strict"
console.clear() ; 

// main code 

class Person 
{
    name = "Ali" ;

    getName()
    {
        return this.name ;
    }

}

class Student extends Person
{
    //name , getName()

    age = 20 ;

    printInfo()
    {
        console.log(super.getName()) ; 
    }

}


let std1 = new Student() ;
std1.printInfo();
