

var randomNumber , guessNumber , i , flag=0 ;

i=1 ;
do
{
    guessNumber = Number(prompt("Enter Your Guess Number (0-5) : ")) ;

    randomNumber = Math.round(Math.random()*6) ;

    if(guessNumber == randomNumber)
    {
        alert("Correct !!!") ;
        flag++ ;
    }

    i++ ; 

}while(i<=3) ;


alert("Game Over") ;

document.write(`<h2>${flag} times correct`) ;

