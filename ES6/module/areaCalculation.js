import { circleArea, rectangleArea, squareArea } from "./areaCalculationModule.js";

"use strict"
console.clear() ;



var isContinue = confirm("Do you want to agree ? ") ;

if(isContinue)
{
    let areaOfCircle , areaOfRectangle , areaOfSquare ;

    areaOfCircle = circleArea(5) ;
    console.log(`The area of a circle is : ${areaOfCircle}`) ; //

    areaOfRectangle = rectangleArea(5,7) ;
    console.log(`The area of a rectangle is : ${areaOfRectangle}`) ; //35 

    areaOfSquare = squareArea(8) ;
    console.log(`The area of a square is : ${areaOfSquare}`) ;

}
else
{
    alert("Ok ! Thank You . ");
}