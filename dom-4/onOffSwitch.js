
console.clear() ;

var head = document.getElementsByTagName("h2")[0] ;
//console.log(head) ;
var btn = document.getElementsByTagName("button")[0] ;
// console.log(btn) ;


btn.addEventListener("click",fun) ;

function fun()
{
    var value =  head.textContent.toString() ;
    // console.log(value) ;

    // if(value === "ON")
    //     head.textContent = "OFF" ;
    // else
    // head.textContent = "ON" ;

    head.textContent = head.textContent === "ON" ? "OFF" : "ON" ;

    setButtonTitle(value) ;

}

btn.addEventListener("mouseover",function(){
    btn.setAttribute("title","Click to On or OFF the system") ;
}) ;

function setButtonTitle(text)
{
    if(text === "ON")
        btn.setAttribute("title","Click to ON the system") ;
    else
    btn.setAttribute("title","Click to OFF the system") ;
}
