

for(var i=0 ; i<3 ; i++)
{
    var btn = document.querySelectorAll(".btn")[i] ;
    btn.addEventListener("click",audioFunction) ;

    function audioFunction()
    {
        var text = this.innerHTML ;

        var head = document.querySelector("h1") ;
        head.innerHTML = text + " is playing" ;
        
        playSounds(text) ;

    }
}

function playSounds (text)
{
    switch(text)
    {
        case "A" :
            var audio = new Audio("./audios/a.mp3") ;
            audio.play() ;
            break ;

        case "B" :
            var audio = new Audio("./audios/b.mp3") ;
            audio.play() ;
            break ;

        case "C" :
            var audio = new Audio("./audios/c.mp3") ;
            audio.play() ;
            break ;
    }
}

