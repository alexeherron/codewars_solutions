// COMPARE STRINGS BY SUM OF CHARS
// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.
// Examples:

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

// MY SOLUTION
function compareStrings(str1, str2){
    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let convertedStrings = [str1, str2].map(x => (!x) ? '' : x).map(x => !(x.split('').every(y => alpha.includes(y))) ? '' : x).map(x => x.toUpperCase());
    let charCodes = convertedStrings.map(x => x.split('').map(y => y.charCodeAt(0)).reduce((acc, item) => acc + item, 0));
    return (charCodes[0] == charCodes[1]);
}

// OTHER CLEVER SOLUTION
function compare(s1, s2) {
    if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
      return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
             s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
    return true;
}