//SIMPLE MULTIPLICATION
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//MY SOLUTION
const simpleMult = num => num%2===0 ? num*8 : num*9;

//OTHER CLEVER SOLUTION
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}