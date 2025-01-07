

var names = ["Ali" , "Kamal" , "Boby"] ;
var numbers = [5,2,1,9,7,12,10] ;


console.log("Names : "+names) ;

console.log("The size of names array : "+names.length) ;

// add an element at the last position 
names.push("Matin") ;
console.log("After push : "+names) ;

// remove an element from last position 
names.pop() ;
console.log("After pop : "+names) ;

// add an element at the first position 
names.unshift("Jabbar") ;
console.log("After unshift : "+names) ;

// remove an element from the first position 
names.shift() ;
console.log("After shift : "+names) ;

//sort the string array:names 
names.sort() ;
console.log("After sorting the names : "+names) ;

console.log("Numbers : "+numbers) ;

//sort the Number  type array:numbers ascending
numbers.sort(function(a,b){return a-b;}) ;
console.log("After sort the numbers ascending : "+numbers) ;

// sort the Number type array:numbers descending 
numbers.sort(function(a,b){return b-a;}) ;
console.log("After the sort numbers in descending : "+numbers)

// concat two array 
var newArray = names.concat(numbers) ;
console.log("After concat the names and numbers array : "+newArray) ;

//slice the newArray 
slicedArray = newArray.slice(2,5) ;
console.log("After slice the new array from 2-5 : "+slicedArray) ;


var subjects = ["cse","te","ce","eee","bba","math"] ;

console.log("The main array is : "+subjects) ;

//reverse the array 
var reversedArray = subjects.reverse() ;
console.log("The reversed array is : "+reversedArray);

//insert two element 
// subjects.splice(1,2,"nursing","medical") ;
// console.log("After insert two element : "+subjects) ;

// remove element 
subjects.splice(1,3) ;
console.log("After remove from 1-3 : "+subjects) ;


