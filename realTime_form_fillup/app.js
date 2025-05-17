// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let morgan = require("morgan") ;
let cors = require("cors") ;
let userCollection = require("./model") ;

// Connect With Server : 

app.use(express.urlencoded({extended:true})) ;
app.use(express.json()) ;
app.use(express.static("public")) ;

app.use(cors()) ;
app.use(morgan("dev")) ;

// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).send("Home page") ;

}) ; 

app.get("/xyz" , function(req,res){

    res.status(200).sendFile(__dirname + "/index.html") ;

}) ;

app.post("/xyz" , async function(req,res){

    try
    {

        let {name , age , skills} = req.body ;

        let newUser = new userCollection ({

            name ,
            age ,
            skills 

        }) ;
        await newUser.save() ;

        res.status(201).json({

            success : true ,
            message : "New user is created" ,
            newUser

        })

    }
    catch(error)
    {
        res.status(402).json({

            message : "Find error to store the data in DB !!!" ,
            error : error.message 

        })
    }

}) ;

// handle the route error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message : "Page not found !!!" 

    });

});

// handle the server error 

app.use(function(err,req,res,next){

    res.status(500).json({

        status : 500 ,
        message : "Server error find !!!" ,
        error : err.message 

    });
});



// Exports Code :

module.exports = app ;
