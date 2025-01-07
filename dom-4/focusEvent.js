

var x = document.querySelector("#id1") ;
x.addEventListener("focus",function(){
    x.style.backgroundColor="tomato" ;
}) ;

x.addEventListener("blur",function(e){
    x.value = e.target.value.toUpperCase() ;
}) ;

