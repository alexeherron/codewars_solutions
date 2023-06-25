//ANAGRAM DETECTION
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

//MY SOLUTION
const anagram = (str1, str2) => (str1.toLowerCase().split('').sort().join('')) == (str2.toLowerCase().split('').sort().join(''));

//OTHER CLEVER SOLUTION
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };