
// addition using general function 

function sum(a,b)
{
    var r=0 ;
    r = a + b ;

    return r ;
}

// addition using Arrow Function  with Two parameter

var sum2 = (x,y) => 
{
    var r=0 ;

    r = x + y ;

    return r ; //explicitly returned value 
}

// multiplication using Arrow function with One parameter 

var multiplication = (m) => m * m ; // implicitly returned value 

// Arrow function without any parameter 

var fun = () => 
{
    document.write("This is Arrow function without any parameter") ;
}


var result1 , result2 , multi ;

result1 = sum(5,9) ;
document.write("The sum1 is : "+result1+"<br>") ;


result2 = sum2(25,6) ;
document.write("The sum2 is : "+result2+"<br>") ;

multi = multiplication(7) ;
document.write("The multiplication is : "+multi+"<br>") ;

fun() ;

