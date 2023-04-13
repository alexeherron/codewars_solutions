//EXCLAMATION MARKS SERIES #7: REMOVE WORDS FROM THE SENTENCE IF IT CONTAINS ONE EXCLAMATION MARK
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
// Examples

// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

//MY SOLUTION
const remove = string => string.split(' ').filter(x => (x.indexOf('!') !== x.lastIndexOf('!')) || (x.indexOf('!') == -1)).join(' ');

//OTHER CLEVER SOLUTION
function remove(s){
    return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}