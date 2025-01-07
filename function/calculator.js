

function addition(n1,n2)
{
    var result ; 
    result = n1 + n2 ;

    return result ;
}

function subtraction(n1,n2)
{
    var result ;
    result = n1 - n2 ; 

    return result ;
}

function multiplication(n1,n2)
{
    var result ;
    result = n1 * n2 ; 

    return result ;
}

function division(n1,n2)
{
    var result ;
    result = n1/n2 ; 

    return result ;
}

var number1 , number2 , finalResult ;

number1 = prompt("Enter first number : ") ;
number2 = prompt("Enter second number : ") ;

number1 = parseInt(number1) ;
number2 = parseInt(number2) ;

document.write("number1 = "+number1+"<br>") ;
document.write("number2 = "+number2+"<br>");

finalResult = addition(number1,number2) ;
document.write("The addition is : "+finalResult+"<br>") ;

finalResult = subtraction(number1,number2) ;
document.write("The subtraction is : "+finalResult+"<br>") ;

finalResult = multiplication(number1,number2) ;
document.write("The multiplication is : "+finalResult+"<br>") ;

finalResult = division(number1,number2) ;
document.write("The division is : "+finalResult+"<br>") ;

