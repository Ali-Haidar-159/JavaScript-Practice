

console.clear() ;

var textArea = document.querySelector("#test") ;

// textArea.addEventListener("keydown",function(){
//     console.log("Key-down") ;
// }) ;

// textArea.addEventListener("keypress",function(){
//     console.log("Key-press") ;
// }) ;

// textArea.addEventListener("keyup",function(){
//     console.log("Key-up") ;
// }) ;

textArea.addEventListener("keyup",function(e){
    // console.log(e.key); // kon button press korchi 
    // console.log(e.keyCode) ; // jei button press korbo tar ASCII value print korbe 
    // console.log(e.code) ; // button er nam ta print korbe 
    //console.log(e.shiftKey) ; // shift chepe kono button press korle true return korbe 

    if(e.shiftKey)
    {
        console.log("Shift + "+e.key) ;
    }

}) ;

textArea.addEventListener("keydown",function(e){
    if(e.repeat)
    {
        alert("Do not pressing the button") ;
    }
}) ;

