//IS THERE A VOWEL IN THERE?
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//MY SOLUTION
function vowelID(array){
    let vowels = 'aeiou'
    let charCodes = [97, 101, 105, 111, 117]
    for(i = 0; i < charCodes.length; i++){
         for(j = 0; j < array.length; j++){
             if(array[j] == charCodes[i]){
                 array[j] = vowels[i];
             }
        }
    }
    return array;
}

//OTHER CLEVER SOLUTIONS
const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

//
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVoww=a=>a.map(x=>v[x]||x)