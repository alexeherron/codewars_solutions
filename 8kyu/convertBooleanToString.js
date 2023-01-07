//CONVERT BOOLEAN TO 'YES' OR 'NO'
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//MY SOLUTION
const convertBoolean = bool => (bool === true) ? 'Yes' : 'No';

//OTHER CLEVER SOLUTION
function boolToWord( bool ){
    return true === bool ? 'Yes' : 'No'
}