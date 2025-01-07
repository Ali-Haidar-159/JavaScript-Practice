// initial code 
"use strict"
console.clear() ;

// main code 

class Math
{
    magic(...para)
    {
        if(para.length === 0)
        {
            console.log("There is no parameter") ;
        }
        else if(para.length === 1)
        {
            console.log("There are one parameter : ",para[0]) ;
        }
        else
        {
            console.log("There is more than one parameter");
        }
    }
}

let m = new Math() ;
m.magic() ;
m.magic(10) ;
m.magic(88,99) ;