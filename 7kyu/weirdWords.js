//WEIRD WORDS
// Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

// Notes:

//     Spaces and special characters should remain the same.
//     Capital letters should transfer in the same way but remain capitilized.

// Examples

// "Hello"               -->  "Ifmmp"
// "What is your name?"  -->  "Xibu jt zpvs obnf?"
// "zoo"                 -->  "app"
// "zzZAaa"              -->  "aaABbb"

//MY SOLUTION
function weirdWords(str){
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shifted = str.split('').map(x => (!alpha.includes(x) && !upperAlpha.includes(x)) ? x : (x == 'Z') ? 'A' : (x == 'z') ? 'a' : (x == x.toUpperCase()) ? (upperAlpha[upperAlpha.indexOf(x)+1]) : (alpha[alpha.indexOf(x)+1]));
    return shifted.join('');
}

//OTHER CLEVER SOLUTION
function nextLetter(str) {
    return str.replace(/[a-zA-Z]/g, function(c){
          switch (c) {
             case 'z': return 'a';
             case 'Z': return 'A';
             default:  return String.fromCharCode(c.charCodeAt(0) +1);
           }
       });
}