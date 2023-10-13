// VOWELS BACK
// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

// MY SOLUTION
function vowelsBack(str){
    let alpha = 'vwxyzabcdefghijklmnopqrstuvwxyzabcdefghi';
    let vowels = 'aeiou';
    let splitStr = str.split('')
        .map(x => (x == 'c') ? 'b' : (x == 'o') ? 'n' : (x == 'd') ? 'a' : (x == 'e') ? 'a' :
        (vowels.includes(x)) ? alpha[alpha.indexOf(x) - 5] : alpha[alpha.indexOf(x) + 9])
        .map((x,i) => ('code'.includes(x)) ? str[i] : x);
    return splitStr.join('');
}

// OTHER CLEVER SOLUTION
const vowelBack = s => {
    const code = {c:-1,o:-1,d:-3,e:-4}
    
    // Determine the amount of Shifting
    function moveAmount (letter) {
      let move = 9                   // Default to Consonant
      if ([...'aeiou'].includes(letter)) move = -5  // VOWEL
      if (letter in code) move = code[letter] // CODE
      return move
    }
    // Shift letter and wrap around
    function shiftLetter(letter){
      // RANGE...a-z...97-122
      var sl = (letter.charCodeAt() + moveAmount(letter))
      var nl = ""
      // OUT OF BOUNDS Corrections
      if (sl>122) sl = 96 + (sl-122)
      if (sl<97)  sl = 123 - (97-sl)
      
      nl = String.fromCharCode(sl)
      // Check for CODE
      return (nl in code) ? letter : nl
    }
  
    return [...s].map(shiftLetter).join('')
}