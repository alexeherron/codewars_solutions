//REVERSED MESSAGE
// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

//MY SOLUTION
const reverseMessage = str => (str.length == 0) ? '' : str.toLowerCase().split('').reverse().join('').split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join(' ');

//OTHER CLEVER SOLUTION
function reverseMessage(str) {
    return str.toLowerCase().split('').reverse().join('')
              .replace(/(^|\s+)[a-z]/g, c => c.toUpperCase());
}