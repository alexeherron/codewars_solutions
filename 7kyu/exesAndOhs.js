//EXES AND OHS
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//MY SOLUTION
const XO = string => string.split('').filter(x => x == 'x' || x == 'X').length == string.split('').filter(x => x == 'o' || x == 'O').length;

//OTHER CLEVER SOLUTION
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}