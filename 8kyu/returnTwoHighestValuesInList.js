//RETURN TWO HIGHEST VALUES IN LIST
// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

//MY SOLUTION
const twoHighest = arr => [...new Set(arr)].sort((a,b) => b-a).slice(0,2);

//OTHER CLEVER SOLUTION
const twoHighest = a => a
  .filter((e, i) => i === a.lastIndexOf(e))
  .sort((x, y) => y - x)
  .slice(0, 2);