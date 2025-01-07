

var div = document.querySelector("div") ;

div.addEventListener("click",function(){
    console.log("Clicked Event") ;
}) ;

div.addEventListener("dblclick",function(){
    console.log("Double-Clicked Event") ;
}) ;

div.addEventListener("mousedown",function(){
    console.log("MouseDown Event") ;
}) ;

div.addEventListener("mouseup",function(){
    console.log("MouseUp Event") ;
}) ;

div.addEventListener("mouseenter",function(){
    console.log("MouseEnter Event") ;
}) ;

div.addEventListener("mouseleave",function(){
    console.log("MouseLeave Event") ;
}) ;

div.addEventListener("mousemove",function(){
    console.log("MouseMove Event") ;
}) ;

div.addEventListener("mouseover",function(){
    console.log("MouseOver Event") ;
}) ;

