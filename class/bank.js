"use strict"
console.clear() ;

class Members 
{
    constructor(name,id,amount)
    {
        this.name = name ;
        this.id = id ;
        this.amount = amount ;
    }

    set newName (name)
    {
        this.name = name ;
    }

    get fullName()
    {
        return this.name ;
    }

    display ()
    {
        console.log(`Name : ${this.fullName}`) ; //using getter
        console.log(`ID : ${this.id}`) ;
        console.log(`Amount : ${this.amount}`) ;
    }


}

var m1 = new Members("ali" , 101 , 50000) ;
console.log("Before change the name : ") ;
m1.display() ;
m1.newName = "anis" ; //using setter 
console.log("After change the name : ") ;
m1.display() ;


