

var digit ; 
digit = prompt("Enter a digit from 0 to 5 : ")  ;


console.log("Your entered digit is : "+digit) ;

switch(digit)
{
    case "0" : 
        console.log("Zero") ;
        break ;
    case "1" : 
        console.log("One") ;
        break ;
    case "2" :
        console.log("Two") ;
        break ;
    case "3" : 
        console.log("Three") ;
        break ;
    case "4" :
        console.log("Four") ;
        break ;
    case "5" : 
        console.log("Five") ;
        break ;
    default : 
        console.log("invalid number.") ;
}

