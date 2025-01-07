var result = 3 ;

var fatherPromise = new Promise (function(resolve,reject){

    if(result == 4)
    {
        resolve("Lets go to buy a cycle") ;
    }
    else
    {
        reject("Sorry ! You failed to earn 4") ;
    }

}) ;

fatherPromise.then(function(msg){
    console.log(msg) ;
}).catch(function(msg){
    console.log(msg) ;
}).finally(function(){
    console.log("This is finally") ;
}) ;


