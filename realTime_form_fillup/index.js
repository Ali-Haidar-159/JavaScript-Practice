// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let app = require("./app") ;
let mongoose = require("./model") ;

let chalk = require("chalk") ;

// Connect With Server : 

let port = 3000 || 5000 ;

app.listen(port , function(){

    console.log(chalk.bold.bgRed.italic(`Server is running at http://localhost:${port} ...`)) ;

});

// Exports Code :


