

// IIF 
(function printMessage()
{
    console.log("Hey bro ! This is Ali Haidar from IIF") ;
})() ;

// IIF2
(function add2number(x,y)
{
    var result=0 ;
    
    result = x+y ;

    console.log("The sum is : "+result) ;
})(10,7) ;


// IIF3
var multi = (function add2number(x,y)
{
    var result=0 ;
    
    result = x*y ;

    return result ;
})(5,7) ;

console.log("The multiplication result is : "+multi);


