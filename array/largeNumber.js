

function findLargeNumber(numbers)
{
    var i , large ;

    large = numbers[0] ;

    for(i=1 ; i<numbers.length ; i++)
    {
        if(numbers[i] > large)
            large = numbers[i] ;
    }

    return large ;

}

var numbersArray = new Array (5) ;

for (var i=0 ; i<5 ; i++)
{
    numbersArray[i] = Number(prompt(`Enter the ${i+1}th value : `)) ;
}

var largeNumber = findLargeNumber(numbersArray) ;

console.log("The largest number is : "+largeNumber) ;

