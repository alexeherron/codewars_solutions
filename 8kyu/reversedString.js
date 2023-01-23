//REVERSED STRINGS
//Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//MY SOLUTION
const reverseIt = string => string.split('').reverse().join('');

//OTHER CLEVER SOLUTION
const solution = s => [...s].reverse().join('')