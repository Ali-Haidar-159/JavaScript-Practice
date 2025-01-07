

var buttons = document.querySelectorAll("button") ;
var head = document.querySelector("h1") ;

for(var i=0 ; i<3 ; i++)
{
    var btn = buttons[i] ;

    btn.addEventListener("click",function(){

        var content = this.innerHTML ;

        playAnimation(content) ;
    }) ;
    

}

function playAnimation (content)
{  
    if(content=="s")
        content = "Submit" ;
    else if(content=="n")
        content = "Send" ;
    else if(content=="c")
        content = "Clear" ;
    else
        content = content ;

    var componant = document.querySelector("#"+content) ;

    componant.classList.add("animation") ;

    head.innerHTML = content + " button is clicked" ;

    stopAnimation(content) ;

}

function stopAnimation(content)
{   
    var id = document.querySelector("#"+content) ; //id er maddhome componant ta select korlam 

    setTimeout(function(){
        id.classList.remove("animation") ;
    },1000) ;

}

document.addEventListener("keypress",function(kButton){
    var kBtn = kButton.key ;

    playAnimation(kBtn) ;
}) ;





