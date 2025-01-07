"use strict"
console.clear() ;

// select all the elements 
var form = document.querySelector("#form") ;
var idField = document.querySelector("#idField") ;
var infoField = document.querySelector("#infoField") ;
var btn = document.querySelector("#btn") ; 

form.addEventListener("submit",function (e) {

    e.preventDefault() ;
});

var id = null ;

idField.addEventListener("change",function(e){

    id = e.target.value ;
    if(id.length > 0)
        apiCalling(id) ;
    else
        infoField.value = "" ;
    

}) ; 

function apiCalling(id)
{
    var link = "https://jsonplaceholder.typicode.com/posts/"+id ;

    axios.get(link)
    .then(function(res){
        displayInfo(res.data) ;        
    })
    .catch(function(err){
        displayInfo(err.message)
    }) ;
}

function displayInfo(data)
{
    infoField.value = JSON.stringify(data);
}




