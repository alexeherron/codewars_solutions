//VOWEL COUNT
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//MY SOLUTION
const vowelCount = str => (str.match(/[a,e,i,o,u]/g)) != null ? (str.match(/[a,e,i,o,u]/g)).length : 0;

//OTHER CLEVER SOLUTION
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}