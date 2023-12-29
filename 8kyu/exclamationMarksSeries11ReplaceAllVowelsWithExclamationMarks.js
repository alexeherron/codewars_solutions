// EXCLAMATION MARKS SERIES #11: REPLACE ALL VOWELS WITH EXCLAMATION MARKS
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// MY SOLUTION
const replace = s => s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? '!' : x).join('');

// OTHER CLEVER SOLUTION
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
}