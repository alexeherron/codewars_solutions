//FAKE BINARY
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//MY SOLUTION
const fakeBinary = str => str.split('').map(x => (x < 5) ? '0' : '1').join('');

//OTHER CLEVER SOLUTION
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}