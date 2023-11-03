// FIVE WITHOUT NUMBERS
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

// MY SOLUTION
function unusualFive() {
    return 'hiiii'.length;
}

// OTHER CLEVER SOLUTION
const unusualFive = () =>
  Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI));