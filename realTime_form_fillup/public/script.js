// // initial code 

// "use strict" 
// console.clear() ;

// // main code 

// let skillsDiv = document.querySelector("#skillsDiv") ;
// let addBtn = document.querySelector("#addBtn") ;

// let name = document.getElementById("name") ;
// let age = document.getElementById("age") ;

// let name2 = document.getElementById("name2") ;
// let age2 = document.getElementById("age2") ;

// addBtn.addEventListener("click" , function(e){

//     e.preventDefault() ;

//     let tag = document.createElement("input") ;
//     tag.name = "skills" ;
//     tag.type = "text" ;
//     tag.placeholder = "Enter a skill " ;

//     skillsDiv.appendChild(tag) ;

// }) ;

// name.addEventListener("input" , function(){

//     name2.textContent = name.value ;

// });

// age.addEventListener("input" , function(){

//     age2.textContent = age.value ;

// });


"use strict"
console.clear();

let skillsDiv = document.querySelector("#skillsDiv");
let addBtn = document.querySelector("#addBtn");

let name = document.getElementById("name");
let age = document.getElementById("age");

let name2 = document.getElementById("name2");
let age2 = document.getElementById("age2");
let skills2 = document.getElementById("skills2");

function updateSkillsOutput() {
    let allSkillInputs = document.querySelectorAll('input[name="skills[]"]');
    allSkillInputs = Array.from(allSkillInputs) ;    

    let skillArray = allSkillInputs.map(function(item){

        return item.value ;

    });

    // skills2.textContent = skillValues.join(", ");
    skills2.textContent = skillArray;

}



document.querySelector('input[name="skills[]"]').addEventListener("input", updateSkillsOutput);

addBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let tag = document.createElement("input");
    tag.name = "skills[]";
    tag.type = "text";
    tag.placeholder = "Enter a skill";

    tag.addEventListener("input", updateSkillsOutput);

    skillsDiv.appendChild(tag);
});

name.addEventListener("input", function () {
    name2.textContent = name.value;
});

age.addEventListener("input", function () {
    age2.textContent = age.value;
});
