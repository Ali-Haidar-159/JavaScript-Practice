// initial code 
"use strict" 
console.clear() ;

// main code 

// procedure-1.1 to create an object 
let obj1 = {
    name : "Ali" ,
    id : 101 ,
    mark : 94
}
console.log("Object-1 : " ,obj1) ;


// procedure-1.2 to create an object 


function Student (name , id , mark) //constructor for initialize
{
    this.name = name ;
    this.id = id ; 
    this.mark = mark ;
}
let obj2 = new Student ("Ali", 101, 94) ;
console.log("Object-2 : ",obj2);


// procedure-1.3 to create an object 

function TeacherAssistant (name , id , salary)
{
    this.name = name ;
    this.id = id ; 
    this.salary = salary ;

    this.printInfo = function()
    {
        console.log(this.name) ;
        console.log(this.id) ;
        console.log(this.salary) ;
    }

}

let obj3 = new TeacherAssistant("Anis",987,50000) ;
// console.log("Object-3 : " ,t1) ;
obj3.printInfo() ;

// set a proto object 

let obj4 = new Student("Kamal",159,99) ;
let protoObj = new TeacherAssistant ("Jabbar" , 357 , 56000) ;

obj4.__proto__ = protoObj ;

console.log(obj4) ;





