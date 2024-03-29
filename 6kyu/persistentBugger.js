//PERSISTANT BUGGER
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//MY SOLUTION
function persistence(n){
    let result = 0;
    const reduceIt = number => String(number).split('').map((x) => Number(x)).reduce((item, acc) => item*acc, 1);
    while(String(n).split('').length > 1){
        n = reduceIt(n);
        result += 1;
    }
    return result;
}

//OTHER CLEVER SOLUTION
const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
}