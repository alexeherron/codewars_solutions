//TIY-FIZZBUZZ
// In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

//     If a letter is a upper case consonants, replace that character with "Iron".
//     If a letter is a lower case consonants or a non-alpha character, do nothing to that character
//     If a letter is a upper case vowel, replace that character with "Iron Yard".
//     If a letter is a lower case vowel, replace that character with "Yard".

// Ready?

//MY SOLUTION
function tiyFizzBuzz(str){
    let lowerVowels = 'aeiou';
    let upperVowels = 'AEIOU';
    let upperCon = 'BCDFGHJKLMNPQRSTVWXYZ'
    console.log(str.split(''));
    return str.split('').map(x => 
        (lowerVowels.includes(x)) ? 'Yard' : 
        (upperVowels.includes(x)) ? 'Iron Yard' :
        (upperCon.includes(x)) ? 'Iron' :
        x
    ).join('');
}

//OTHER CLEVER SOLUTION
const tiyFizzBuzz = s => s.split``.map(i => /[AOEIU]/.test(i) ? "Iron Yard" :
  /[aoeiu]/.test(i) ? "Yard" : /[BCDFGHJKLMNPQRSTVWXYZ]/.test(i) ? "Iron" : i).join``