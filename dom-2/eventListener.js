

var button = document.getElementById("btn") ; //button k select korlam 
button.addEventListener("click",forClick) ;
button.addEventListener("mouseover",forMouseOver) ;
button.addEventListener("mouseout",forMouseOut) ;

var para = document.getElementById("para") ;

function forClick()
{
    para.innerHTML += "You clicked the button<br>" ;
    para.style.textAlign = "center" ;
}

function forMouseOver()
{
    para.innerHTML += "Mouse-Over<br>" ;
    para.style.textAlign = "center" ;
}

function forMouseOut()
{
    para.innerHTML += "Mouse-Out<br>" ;
    para.style.textAlign = "center" ;
}

