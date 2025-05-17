// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let mongoose = require("mongoose") ;

// Connect With Server : 

mongoose.connect("mongodb://localhost:27017/xyz_db") 
.then(function(r){

    console.log("Database connected successfully ...") ;

})
.catch(function(err){

    console.log("Database does not connected !!!") ;

}) ;

// Creating Schema : 

let userSchema = new mongoose.Schema({

    name : {
        type : String ,
        required : [true , "Name should be required !!!"]
    } ,
    age : {
        type : Number ,
        required : {
            value : true ,
            message : "Age should be required !!!"
        }
    } ,
    skills : {
        type : [String] ,
        required : [true , "Skill should be required !!!"]
    }

}) ;

// Creating The Model Or Collection 

let userCollection = mongoose.model("CV" , userSchema) ;

// Exports Code :

module.exports = userCollection ;
