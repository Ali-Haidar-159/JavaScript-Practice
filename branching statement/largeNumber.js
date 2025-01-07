
var n1 , n2 , n3 ; 

n1 = prompt("Enter the first number : ") ;
n2 = prompt("Enter the second number : "); 
n3 = prompt("Enter the third number : ") ;

console.log("The first number is : "+n1) ;
console.log("The second number is : "+n2) ;
console.log("The last number is : "+n3) ;


if(n1>n2 && n1>n3)
    console.log("The large number is : "+n1) ;
else if(n2>n1 && n2>n3)
    console.log("The large number is : "+n2) ;
else
    console.log("The large number is : "+n3) ;


