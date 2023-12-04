// SUM OF ARRAY SINGLES
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice. 

// MY SOLUTION
const repeats = arr => arr.filter(x => arr.filter(y => y == x).length == 1).reduce((acc, item) => acc + item, 0);

// OTHER CLEVER SOLUTION
function repeats(arr){
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};