//SUM OF ODD CUBED NUMBERS
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//MY SOLUTION
const sumOdd = arr => (arr.filter(x => typeof x != 'number').length > 0) ? undefined : arr.map(x => Math.pow(x,3)).filter(x => x % 2 != 0).reduce((acc, item) => acc + item, 0);

//OTHER CLEVER SOLUTION
let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
}