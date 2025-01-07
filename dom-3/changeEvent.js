
//<input type="text" name="fullName" id="fNameId" class="fNameClass">

console.clear() ;

var fullName = document.querySelector("input") ;
fullName.addEventListener("change",fun) ;

function fun(e)
{
    console.log(e) ; //print all the details of input field
    console.log(e.target) ; // print the component 
    console.log(e.target.className) 
    console.log(e.target.id) ;
    console.log(e.target.name) ;
    console.log(e.target.value) ; // print the value which i write in the text field
}

