// initial code 

"use strict"
console.clear() ;

// main code 

class Person 
{
    myMethod(x,y,z)
    {
        if(arguments.length === 0)
        {
            console.log("There is no parameter") ;
        }
        else if(arguments.length === 1)
        {
            console.log("There are One parameter") ;
        }
        else if(arguments.length === 3)
        {
            console.log("There are Three parameter") ;
        }
    }
}

let p = new Person () ;
p.myMethod() ;
p.myMethod(1) ;
p.myMethod(1,2) ;
p.myMethod(1,2,3) ;