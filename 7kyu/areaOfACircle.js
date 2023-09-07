//AREA OF A CIRCLE
// Complete the function which will return the area of a circle with the given radius.

// Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

// Example:

// circleArea(-1485.86);    //returns false
// circleArea(0);           //returns false
// circleArea(43.2673);     //returns 5881.25
// circleArea(68);          //returns 14526.72
// circleArea("number");    //returns false

//MY SOLUTION
const circleArea = num => (num > 0 && num===Number(num)) ? Number((Math.PI*Math.pow(num,2)).toFixed(2)) : false;

//OTHER CLEVER SOLUTION
var circleArea = function(radius) {
    return radius > 0 ? +(radius*radius*Math.PI).toFixed(2) : false;
};