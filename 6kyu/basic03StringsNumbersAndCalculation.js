// BASICS 03: STRINGS, NUMBERS, AND CALCULATION
// Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

// So what to do?

// Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.
// Easy example:

// Input: "gdfgdf234dg54gf*23oP42"
// Output: "54929268" (because 23454*2342=54929268)

//MY SOLUTION
function basics(str){
    // first let's find the operator
    let op = str.split('').filter(x => '+-*/'.includes(x));

    // now we'll split the string into it's two parts
    let both = str.split(op);

    // now we'll filter out everything we don't need from each part, and convert them to numbers

    both = both.map(x => Number(x.split('').filter(y => '0123456789.'.includes(y)).join('')));

    // now to apply the operator and return the result as a string

    let result = (op == '+') ? (both[0] + both[1]) : (op == '-') ? (both[0] - both[1]) : (op == '*') ? (both[0] * both[1]) : (op == '/') ? (both[0] / both[1]) : null;
    return String(Math.round(result));
}

// OTHER CLEVER SOLUTION
function calculateString(s){
    return eval(s.replace(/[^\d+*/.()-]/g,'')).toFixed();
}