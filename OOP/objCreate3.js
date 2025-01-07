// initial code 
"use strict" 
console.clear() ;

// main code 

class Person 
{
    constructor(name, id, mark)
    {
        this.name = name ;
        this.id = id ;
        this.mark = mark ;
    }

    set newName (name)
    {
        this.name = name ;
    }

    get newName ()
    {
        return this.name ;
    }

    message ()
    {
        console.log("This is a method inside the class");
    }

}

let p1 = new Person("ali" , 101 ,98) ;
console.table(p1) ;
p1.message() ;
p1.newName = "Anis" ;
console.table(p1.newName) ;
