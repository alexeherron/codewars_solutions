//NUMBER OF DECIMAL DIGITS
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

//MY SOLUTION
const numDigits = num => String(num).split('').filter(x => '0123456789'.includes(x)).length;

//OTHER CLEVER SOLUTION
function digits(n) {
    return n.toString().length;
}