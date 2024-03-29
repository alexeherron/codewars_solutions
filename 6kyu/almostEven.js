// ALMOST EVEN
// We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!
// Example:

// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]

// Inputs

// The input to your function will always be valid for this kata.

// MY SOLUTION
function splitInteger(n1, n2){
    let big = Math.max(n1, n2);
    let little = Math.min(n1, n2);
    let piece = Math.floor(big/little);
    let result = new Array(little).fill(piece);
    let remainder = big - result.reduce((acc, item) => acc + item, 0);
    result = result.map((x,i) => (i < remainder) ? x + 1 : x);
    return result.sort((a,b) => a - b);
}

// OTHER CLEVER SOLUTION
function splitInteger(num, parts) {
    const remainder = num % parts;
    const int = Math.floor(num / parts);
  
    return [
      ...new Array(parts - remainder).fill(int),
      ...new Array(remainder).fill(int + 1)
    ];
}