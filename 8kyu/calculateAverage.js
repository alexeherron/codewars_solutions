//CALCULATE AVERAGE
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//MY SOLUTION
const avg = arr => (arr.length == 0) ? 0 : arr.reduce((acc, item) => acc + item, 0)/arr.length;

//OTHER CLEVER SOLUTION
const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;