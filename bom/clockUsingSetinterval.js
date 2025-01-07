

var hour = document.querySelector("#hour") ;
var min = document.querySelector("#min") ;
var sec = document.querySelector("#sec") ;
var startBtn = document.querySelector("button") ;

startBtn.addEventListener("click",function(){
    
    var h=0 , m=0 , s=0 ;

    setInterval(function(){
        s++ ;
        sec.textContent = s ;

        if(s==60)
        {
            s = 0 ;
            m++ ;
            min.textContent = m ;
        }

        if(m==60)
        {
            m=0 ;
            h++ ;
            min.textContent = m ;
            hour.textContent = h ;
        }

    },1000) ;

}) ;



