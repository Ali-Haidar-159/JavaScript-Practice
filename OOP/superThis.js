// initial code 

"use strict" 
console.clear() ;

// main code 

class Person 
{
    constructor(name,age)
    {
        this.name = name ;
        this.age = age ;
    }
}

class Teacher extends Person
{
    //constructor(name,age)

    constructor(name , age , salary, isBangladeshi)
    {
        super(name , age) ;
        this.salary = salary ;
        this.isBangladeshi = isBangladeshi ;
    }
}

let t1 = new Teacher("Ali" , 30 ,25000 , true) ;
console.table(t1) ;