//MAKE ACRONYM
// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

//     split string to words by space char
//     take every first letter from word in given string
//     uppercase it
//     join them toghether

// Eg:
// Code wars -> C, w -> C W -> CW

// Note: There will be at least two words in the given string!

//MY SOLUTION
const makeAcronym = str => str.split(' ').map(x => x.toUpperCase()[0]).join('');

//OTHER CLEVER SOLUTION
function toAcronym( input ){
    return input.split(' ')
                .map(function(item) {
                   return item[0].toUpperCase();
                })
                .join('');
  }