//THIRD ANGLE OF A TRIANGLE
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

//MY SOLUTION
const thirdAngle = (a,b) => 180 - (a+b);

//OTHER CLEVER SOLUTION
const otherAngle = (a, b) => 180 - a - b