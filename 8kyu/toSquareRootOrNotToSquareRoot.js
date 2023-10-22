// TO SQUARE ROOT OR NOT TO SQUARE ROOT
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes

// The input array will always contain only positive numbers, and will never be empty or null.

// MY SOLUTION
const toSquareOrNot = arr => arr.map(x => (Math.sqrt(x) % 1 == 0) ? (Math.sqrt(x)) : Math.pow(x,2));

// OTHER CLEVER SOLUTION
function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
}