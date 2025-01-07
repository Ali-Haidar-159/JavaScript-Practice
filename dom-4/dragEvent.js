

var div  = document.getElementById("div1") ;
var para = document.getElementById("para") ;

para.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("id",e.target.id) ;
}) ;

div.addEventListener("dragover",function(e){
    e.preventDefault() ;
}) ;

div.addEventListener("drop",function(e){
    var id = e.dataTransfer.getData("id") ;
    console.log(id) ;
    var para = document.getElementById(id) ;
    div.appendChild(para) ;
}) ;
