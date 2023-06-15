//REMOVE FIRST AND LAST CHARACTER
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//MY SOLUTION
const firstNLast = str => str.substring(1,(str.length-1));

//OTHER CLEVER SOLUTION
function removeChar(str) {
    return str.slice(1, -1);
}