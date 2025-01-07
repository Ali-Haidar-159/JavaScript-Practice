

var head = document.querySelector("h1") ;

head.addEventListener("mouseover",addStyle);

function addStyle ()
{
    head.classList.add("design") ;
}

head.addEventListener("mouseout",function(){
    head.classList.remove("design") ;
}) ;

//to see the date : 

var date = new Date() ;

var clickMe = document.querySelector("#clickMe") ;
clickMe.addEventListener("click",function(){
    var para = document.getElementsByTagName("p")[0] ;
    para.innerHTML = date.getDate().toString()+"-"+date.getMonth().toString()+"-"+date.getFullYear().toString() ;
}) ;
