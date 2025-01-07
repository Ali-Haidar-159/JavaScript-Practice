"use string"
console.clear() ;

let name = "AliHaidar" ;
console.log("The original string is : ",name) ;

let reverseName = name.split("").reduce(function(result,current){
    return current + result ;
}) ;

console.log("The reversed string is : ",reverseName) ;