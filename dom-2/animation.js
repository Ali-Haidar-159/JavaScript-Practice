var buttons = document.querySelectorAll("button"); 

for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    btn.addEventListener("click", animation);
}

document.addEventListener("keypress",function(kButton){
    var textButton = kButton.key ;
    
    animation(textButton) ;
}) ;

var head = document.getElementById("head") ;

function animation (text2)
{    
    var text = this.innerHTML; 

        if (text === "Button-1" || text2 === "1") {
            buttons[0].classList.add("animation");

            head.innerHTML = "Button-1 is clicked" ;

            stopAnimation(buttons[0]);
        } 
        else if (text === "Button-2" || text2 == "2") {
            buttons[1].classList.add("animation");

            head.innerHTML = "Button-2 is clicked" ;
            
            stopAnimation(buttons[1]);
        } 
        else if (text === "Button-3" || text2 == "3") {
            buttons[2].classList.add("animation");

            head.innerHTML = "Button-3 is clicked" ;
            
            stopAnimation(buttons[2]);
        } 

}

// Function to stop animation after a set time
function stopAnimation(btn) {
    setTimeout(function () {
        btn.classList.remove("animation"); // Remove the animation class after 1 second
    }, 1000);
}
