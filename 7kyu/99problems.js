//99 PROBLEMS #1 LAST IN LIST
// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty:

// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

// In languages that do not have an empty option, just return null

//MY SOLUTION
const problems = arr => arr.length == 0 ? null : arr[arr.length-1];

//OTHER CLEVER SOLUTION
const last = arr => arr.length <= 0 ? null : arr.pop();