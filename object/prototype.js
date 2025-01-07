"use strict" 
console.clear() ;

var protoObj = {

    marks : 78 ,
    calculate : function()
                {
                    console.log("This is calculate function") ;
                }
}

var std = {
    fullName : "Anis" , 
    id : 101
} 

std.__proto__ = protoObj ;

console.log(std) ; 