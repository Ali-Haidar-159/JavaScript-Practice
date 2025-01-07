"use strict"
console.clear() ;

// let areaName = prompt("Enter your area name : ") ;

// const apiLink = "https://wttr.in/"+areaName+"?format=j1" ;

const apiLink = "https://wttr.in/Dhaka?format=j1" ;

/*
fetch(apiLink , {
    method : "GET" 
}) 
.then(function(r){
    if(r.ok)
        return r.json() ;
    else
        return new Error ("Data not found") ;
})
.then(function(r){

    // console.dir(r) ;

    let temperature = r.current_condition[0].temp_C ;
    let area = r.nearest_area[0].areaName[0].value ;

    console.log(`The temperature of ${area} : ${temperature}`) ;
    
}) 
.catch(function(err){console.log(err)}) ; 
*/

async function getWeatherData ()
{
    let promise = await fetch(apiLink , {
        method:"GET" 
    }) ;

    let data = await promise.json() ;

    console.log(data.current_condition[0].temp_C);

}

getWeatherData() ;