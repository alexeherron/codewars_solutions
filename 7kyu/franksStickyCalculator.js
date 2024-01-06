// FRANK'S STICKY CALCULATOR
// Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

// Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

// For instance:

// 50 + 12 becomes 5012

// and then the operation is carried out as usual:

// (5012) + 12 = 5024

// Task

// It is your job to create a function which takes 3 parameters:

// stickyCalc(operation, val1, val2)

// which works just like Frank's sticky calculator
// Some Examples

// stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
// stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
// stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
// stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101

// Note

//     The calculator only works for positive integers only.
//     The calculator rounds any non-integer before operating.
//     The calculator rounds any output to nearest integer.

// For example:

// stickyCalc('/', 12.1, 6.8), 18);   

// 12.1 and 6.8 are rounded to 12 and 7 respectively & they 'stick together' to make 127.

// Although 127 / 7 = 18.1428 ; 18 is outputted instead.

// MY SOLUTION
function stickyCalc (op, v1, v2){
    v1 = Math.round(v1);
    v2 = Math.round(v2);
    let n1 = Number(`${String(v1)}${String(v2)}`);
    let result = (op == '+') ? (n1 + v2) :
                  (op == '-') ? (n1 - v2) : 
                  (op == '*') ? (n1 * v2) : 
                  (n1 / v2);
    return Math.round(result)
}

// OTHER CLEVER SOLUTION
function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1)
    val2 = Math.round(val2)
    val3 = parseInt(val1.toString() + val2.toString());
    switch (operation){
      case "+": result = val3 + val2; break;
      case "-": result = val3 - val2; break;
      case "*": result = val3 * val2; break;
      case "/": result = val3 / val2; break;
    }
    return Math.floor(result);
}