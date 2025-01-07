"use strict"
console.clear() ;

var heading = document.getElementById("heading") ;
var str = "My_Name_Is_Ali_Haidar" ;
var i=0 ; 

function typingText ()
{
	if(i < str.length)
	{
		heading.innerText = heading.innerText + str.charAt(i) ;
		i++ ;
		setTimeout(typingText,150) ;
		
		console.log(i);
	}	
}

typingText() ;

