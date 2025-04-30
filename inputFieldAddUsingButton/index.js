// initial code 

"use strict"
console.clear() ;

// main code 

let skillDiv = document.getElementById("skillDiv") ;
let addBtn = document.getElementById("addBtn") ;
let getBtn = document.getElementById("getBtn") ;

addBtn.addEventListener("click" , function(){
	
	let tag = document.createElement("input");
	tag.type = "text" ;
	tag.name = "skills";
	tag.placeholder = "Enter a skill" ;
	
	skillDiv.appendChild(tag) ;
	
}) ;

getBtn.addEventListener("click" , function(){
	
	let skillArray = new Array () ;
	
	let skillFields = document.getElementsByName("skills") ;
	
	for (let item of skillFields)
	{
		let value = item.value ;
		
		if(value.trim() !== "")
		{
			skillArray.push(value) ;
		}
	}
	
	 console.log("All the skills are : ",skillArray) ;
})



