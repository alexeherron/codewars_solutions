//GET CHARACTER FROM ASCII CODE
// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

//MY SOLUTION
const asciiStuff = char => String.fromCharCode(char);

//OTHER CLEVER SOLUTION
function getChar(c) {
  return String.fromCharCode(c)
}