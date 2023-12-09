// SUM MIXED ARRAY
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// MY SOLUTION
const sumMix = x => x.map(x => Number(x)).reduce((acc, item) => acc + item, 0);

// OTHER CLEVER SOLUTION
function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
}