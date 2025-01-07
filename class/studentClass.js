
"use strict" ;

console.clear() ;

class Student
{
    constructor(id,name,gpa)
    {   
        this.id = id ; 
        this.name = name ;
        this.gpa = gpa ;
    }
}

var s1 = new Student(1001 , "Ali" , 4.56) ;
console.log(`The full object is : ${JSON.stringify(s1)}`) ; 
console.log(`The name of object : ${s1.name}`) ;
console.log(`The id of object : ${s1.id}`) ;
console.log(`The gpa of object : ${s1.gpa}`) ;

