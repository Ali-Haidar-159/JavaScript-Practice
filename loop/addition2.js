

var n , i , sum=0 , num1 , num2 ;

n = prompt("How many time you want to add : ") ;

i = 1 ;
while(i<=n)
{
    num1 = prompt("Enter the first number : ") ;
    num2 = prompt("Enter the second number : ") ;

    num1 = parseInt(num1) ;
    num2 = parseInt(num2) ;

    sum = num1 + num2 ;

    document.write("<br>Number1 = "+num1+"<br>") ;
    document.write("Number2 = "+num2+"<br>") ;
    document.write(`The ${i}th result is : ${sum}<br>`) ;

    i++ ;
}

