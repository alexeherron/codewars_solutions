//BINGO OR NOT
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

//MY SOLUTION
function bingo(arr){
    let unique = [...new Set(arr)].filter(x => (x == 2) || (x == 7) || (x == 9) || (x == 14) || (x == 15));
    return (unique.length == 5) ? 'WIN' : 'LOSE';
}

//OTHER CLEVER SOLUTION
const bingo = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE';