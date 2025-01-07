
var mark ; 
mark = prompt("Enter your mark : ")  ;
mark = parseInt(mark) ;

if(mark >= 80)
    console.log("Congratulations !!! You got A+ .") ;
else if(mark>=70 && mark<80)
    console.log("You got A-") ;
else if(mark>=60 && mark<70)
    console.log("You got B") ;
else if(mark>=50 && mark<60)
    console.log("You got C") ;
else 
    console.log("Sorry fail") ;

