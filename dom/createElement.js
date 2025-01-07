
// create and add an element 
var tagNewElement = document.createElement("h1") ;
var contentNewElement = document.createTextNode("Pakistan") ;
tagNewElement.appendChild(contentNewElement) ;

var div1 = document.getElementById("my-div") ;
div1.appendChild(tagNewElement) ;

// remove an element 
var reElement = document.getElementsByTagName("h1")[1] ;
div1.removeChild(reElement) ;

// insert an element in 2nd position 
var tagNewElement2 = document.createElement("h1") ;
var contentNewElement2 = document.createTextNode("Palestine") ;
tagNewElement2.appendChild(contentNewElement2) ;

var firstElement  = document.querySelectorAll("h1")[1] ;

var div1 = document.getElementById("my-div") ;
div1.insertBefore(tagNewElement2,firstElement) ;

