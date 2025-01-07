// initial code 
"use strict"
console.clear() ;

// main code 

let p1 = new Object() ;
p1.name = "Ali" ;
p1.id = 101 ;
p1.mark = 92 ;
p1.getUserName = function()  {
    return `${p1.name} ${p1.id}` ;
}

console.table(p1) ;
console.log(p1.name) ;
console.log(p1.id) ;
console.log(p1.mark) ;
console.log(p1.getUserName());