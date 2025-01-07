

console.clear() ;

var email = document.querySelector("input[name=email]") ;
email.addEventListener("change",emailFun) ;

function emailFun (e)
{
    console.log(e.target.value) ;
}


var pass = document.querySelector("input[name=pass]") ;
pass.addEventListener("change",passFun) ;

function passFun (e)
{
    console.log(e.target.value) ;
}


