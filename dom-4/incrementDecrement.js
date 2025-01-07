
console.clear() ;

var number = document.querySelector("#number") ;
var plusBtn = document.querySelector("#plusBtn") ;
var minusBtn = document.querySelector("#minusBtn") ;

var counter = 0 ;

plusBtn.addEventListener("click",function(){
    counter++ ;

    number.textContent = counter ;

}) ;


minusBtn.addEventListener("click",function(){
    counter-- ;

    if(counter>0)
        number.textContent = counter ;
    else
        alert("The nunber is 1 .You can't go less than 1") ;


    
}) ;

