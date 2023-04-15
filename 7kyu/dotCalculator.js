//DOT CALCULATOR
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

//     + Addition
//     - Subtraction
//     * Multiplication
//     // Integer Division

// Your Work (Task)

// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
// Examples (Input => Output)

// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

//MY SOLUTION
function dotCalc(string){
    let stringConvert = string.split(' ');
    let first = stringConvert[0].length;
    let second = stringConvert[2].length;
    let result;
    if(stringConvert[1] == '+'){
        result = first + second;
    }else if(stringConvert[1] == '-'){
        result = first - second;
    }else if(stringConvert[1] == '*'){
        result = first * second;
    }else{
        result = Math.floor(first/second);
    }
    return new Array(result).fill('.').join('');
}

//OTHER CLEVER SOLUTION
const dotCalculator = (equation) => {
    const operations = {
      '+' : (a, b) => a + b,
      '-' : (a, b) => a - b,
      '*' : (a, b) => a * b,
      '//': (a, b) => a / b,
    };
    const [left, operator, right] = equation.split(' ');
    return '.'.repeat(operations[operator](left.length, right.length));
}