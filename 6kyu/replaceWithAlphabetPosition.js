//REPLACE WITH ALPHABET POSITION
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//MY SOLUTION
function alphabetPosition(str){ 
    let alphaLocale = "abcdefghijklmnopqrstuvwxyz"
    let result = []
    let lowerString = str.toLowerCase();
    for(i = 0; i < str.length; i++){
        if((alphaLocale.indexOf(lowerString[i]) + 1) !== 0){
            result.push(alphaLocale.indexOf(lowerString[i]) + 1);
        }
    }
    return result.join(' ')
}

//OTHER CLEVER SOLUTION
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');