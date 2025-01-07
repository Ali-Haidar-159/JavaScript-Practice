
var len = document.querySelectorAll(".btn").length ; // karon eta ekta array ba collection return kore .


for (var i=0 ; i<len ; i++)
{
    var btn = document.querySelectorAll(".btn")[i] ;
    btn.addEventListener("click",function(){

    var text = this.innerHTML ; // button tag er content ta variable  a nilam 

    var head = document.getElementById("head") ;
    head.innerHTML = text + " is clicked"  ;
}) ;
}



