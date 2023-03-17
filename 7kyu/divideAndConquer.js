//DIVIDE AND CONQUER
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//MY SOLUTION
function divideAndConquer(array){
    let strings = array.filter(x => typeof x === 'string').reduce((item, acc) => Number(item) + Number(acc), 0);
    let numbers = array.filter(x => typeof x === 'number').reduce((item, acc) => item + acc, 0);
    return numbers - strings;
}

//OTHER CLEVER SOLUTION
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}