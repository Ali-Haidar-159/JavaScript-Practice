"use strict" 
console.clear() ;

let teacher = {
    teacherName : "Ruhul" ,
    marksAvg :  function(){
                    console.log("This is average function") ;
                } ,
    totalMark : function (){
                console.log("This is totalMark function") ;
    }
    
}

let teacherDetails = {
    age : 23 , 
    salary : 50000 
}

teacherDetails.__proto__ = teacher ;

console.log(teacherDetails) ;
teacherDetails.marksAvg() ;
teacherDetails.totalMark() ;