// NICKNAME GENERATOR
// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"

// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"

// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

//     Vowels are "aeiou", so discount the letter "y".
//     Input will always be a string.
//     Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
//     The input can be modified

// MY SOLUTION
const nickname = str => (str.length < 4) ? 'Error: Name too short' : ('aeiou'.includes(str[2])) ? str.substring(0,4) : str.substring(0,3);

// OTHER CLEVER SOLUTION
const nicknameGenerator = (name) => name.length > 3 
  ? name.slice(0,  3 + 'aeiou'.includes(name[2])) 
  : 'Error: Name too short'