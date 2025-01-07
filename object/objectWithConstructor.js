

function Student (name,id,gpa,course)
{
    this.name = name ; 
    this.id = id ; 
    this.gpa = gpa ; 
    this.course = course ;

    this.printDetails = function() // function expression 
    {
        console.log("Name : "+this.name) ;
        console.log("Id : "+this.id) ;
        console.log("Gpa : "+this.gpa) ;
        console.log("Course : "+this.course) ;
    }

}

var std1 = new Student("Ali",101,3.55,["cse","phy","gen"]) ;
std1.printDetails() ;


