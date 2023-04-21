//COUNT THE SMILEY FACES
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note

// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//MY SOLUTION
function countSmileys(array){
    let result = 0;
    let filtArray = array.filter(x => (x[0] == ':' || x[0] == ';'));
    filtArray = filtArray.filter(x => (x[x.length-1] == ')' || x[x.length-1] == 'D'));
    result += filtArray.filter(x => x.length == 2).length;
    result += filtArray.filter(x =>(x.length == 3 && (x[1] == '-' || x[1] == '~'))).length;
    return result;
}

//OTHER CLEVER SOLUTION
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}