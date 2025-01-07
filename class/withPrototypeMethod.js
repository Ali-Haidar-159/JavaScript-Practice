
"use strict" 
console.clear() ;

class Teacher
{
    constructor(id,name,salary)
    {
        this.id = id ;
        this.name = name ;
        this.salary = salary ;
    }

    //prototype method 
    display()
    {
        console.log("Name : ",this.name) ;
        console.log("ID : ",this.id) ;
        console.log("Salary : ",this.salary) ;
    }
}

var t1 = new Teacher(101,"Anis",30000) ;
t1.display() ;
