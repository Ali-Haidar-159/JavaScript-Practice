

var video = document.querySelector("video") ;

//video ta play hbe naki etar jonno ei event ta kaj korbe 
video.addEventListener("canplay",function(){
    console.log("can-play") ;
}) ;

//video er play button a click korle ei event kaj korbe
video.addEventListener("play",function(){
    console.log("play") ;
}) ;

//video ta jokhn playing tokhn ei event kaj korbe
video.addEventListener("playing",function(){
    console.log("playing") ;
}) ;

//video pause korle ei button kaj korbe
video.addEventListener("pause",function(){
    console.log("pause") ;
}) ;

video.addEventListener("ended",function(){
    console.log("ended") ;
}) ;

//volume change korle ei event kaj korbe 
video.addEventListener("volumechange",function(e){
    console.log("volumechange") ;
    console.log(e.target.volume) //volume er value 
}) ;

