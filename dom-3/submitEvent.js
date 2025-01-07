
console.clear() ;

var form = document.querySelector("form") ;
var fullName = form.querySelector("div #fullName") ; 
var email = form.querySelector("div #email") ;
var password = form.querySelector("div #password") ;

form.addEventListener("submit",fun) ;

function fun (e)
{
    e.preventDefault() ; // to off auto refresh

    // console.log(fullName.value) ;
    // console.log(email.value) ;
    // console.log(password.value) ;

    // amra sadharonoto backend a data pathai Object akare 

    var info = {
        name : fullName.value, 
        email : email.value ,
        password : password.value 
    } ;

    //console.log(info) ;
    console.log(JSON.stringify(info)) ;


    //for removing the given data from the input field 
    fullName.value = "" ;
    email.value = "" ;
    password.value = "" ;
}

