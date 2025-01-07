// initial code 
"use strict"
console.clear() ;

// main code 

class Person 
{
    name = "Ali" ;

    constructor(msg)
    {
        console.log(msg) ;
    }

}

class Teacher extends Person
{

    //parent_class_constructor(msg) , name 

    name = "Anis" ;

    constructor(x)
    {
        super(x) ;
        console.log(this.name) ;
        console.log("Child Class") ;
    }

}



let t1 = new Teacher("Hello") ;