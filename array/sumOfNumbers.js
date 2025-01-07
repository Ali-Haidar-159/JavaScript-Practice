

var i , size , sum=0 ;

size = Number(prompt("Enter how many numbers : ")) ; //typecast from String to Int

var numbers = new Array(size) ;

//array input 
for(i=0 ; i<size ; i++)
{
    numbers[i] = Number(prompt(`Enter the ${i+1}th number : `)) ;

    sum += numbers[i] ;
}

//array print 
console.log("The array is : "+numbers) ;
console.log("The sum is : "+sum) ;


