"use strict" 
console.clear() ;

class Employee
{
    constructor (id,name,officeHour)
    {
        this.id = id ; 
        this.name = name ;
        this.officeHour = officeHour ;

        //instance method 
        this.position = function(text)
        {
            console.log("my position is : ",text) ;
        }
    }

    //prototype method 
    printInfo()
    {
        console.log("Id : ",this.id) ;
        console.log("Name : ",this.name) ;
        console.log("Office-Hour : ",this.officeHour) ;
    }
}

var e1 = new Employee(101,"ali",8) ;
e1.printInfo() ; // prototype method 
e1.position("Manager") ; // instance method 

