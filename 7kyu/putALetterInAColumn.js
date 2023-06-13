//PUT A LETTER IN A COLUMN
// Create a function that takes index [0, 8] and a character. It returns a string with columns. Put character in column marked with index.

// Ex.: index = 2, character = 'B'

// | | |B| | | | | | |
//  0 1 2 3 4 5 6 7 8

// Assume that argument index is integer [0, 8]. Assume that argument character is string with one character.

//MY SOLUTION
function letterColumn(ind, char){
    return [...Array(10).fill('|')].map((x,i) => (i == ind) ? (x+char) : (x+' ')).join('').slice(0,19);
}

//OTHER CLEVER SOLUTION
const buildRowText = (index, character) => {
    let str = '| | | | | | | | | | |';
    return str.substr(0, 2 * (index + 2) - 3) + character + str.substr(2 * (index + 2))
}