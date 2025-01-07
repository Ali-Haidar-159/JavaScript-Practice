// initial code 

"use strict"
console.clear() ;

// main code 

class Person 
{
    #name ; 

    constructor(name)
    {
        this.#name = name ;
    }

    set newName (name)
    {
        this.#name = name ;
    }

    get getName ()
    {
        return this.#name ;
    }
}

let p1 = new Person("Ali");
console.log("Old name : " ,p1.getName) ;

p1.newName = "Anis" ;
console.log("New name : " ,p1.getName) ;