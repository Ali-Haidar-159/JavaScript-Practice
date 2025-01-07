

var field = document.querySelector("input") ;
var para = document.getElementById("para") ;

field.addEventListener("copy",function(){
    para.innerText = "Text Copied Successfully"
}) ;

field.addEventListener("cut",function(){
    para.innerText = "Text Cut Successfully"
}) ;

field.addEventListener("paste",function(){
    para.innerText = "Text Pasted Successfully"
}) ;