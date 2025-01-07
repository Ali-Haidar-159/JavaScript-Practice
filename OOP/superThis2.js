// initial code 

"use strict" 
console.clear() ;

// main code 

class Person 
{
    constructor (name , id)
    {
        this.name = name ;
        this.id = id  ;
    }

    printInfo() //protoType method
    {
        console.log(this.name) ;
        console.log(this.id) ;
    }
}

class Employee extends Person
{
    // constructor (name,id) , printInfo()

    constructor(name , id , salary , isBangladeshi)
    {
        super(name , id) ; // parent's constructor call
        this.salary = salary ;
        this.isBangladeshi = isBangladeshi ;
    }

    display ()
    {
        super.printInfo() ; //parents method call
        console.log("----") ;
        console.log(this.salary) ;
        console.log(this.isBangladeshi) ;
    }
}

let em = new Employee("ali" , 101 , 50000 , true) ;
em.display() ;
