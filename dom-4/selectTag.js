"use strict"
console.clear() ;

let courses = document.querySelector("#courses") ;


console.log("Component : ",courses) ;
console.log("Inner Text is : ",courses.innerText) ;
console.log("Value is : ",courses.value) ;

let selectedOption = courses.options[courses.selectedIndex].innerText;
console.log("selectedOption is : ",selectedOption) ;

courses.addEventListener("change",()=>{
	
	let selectedOption = courses.options[courses.selectedIndex].innerText;
	
	console.log("Value2 is : ",courses.value) ;
	console.log("selectedOption is 2 : ",selectedOption) ;	
	
});