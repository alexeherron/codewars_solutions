//REDUCE BUT GROW
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//MY SOLUTION
function reduceGrow(array){
    return array.reduce((acc, item) => acc*item, 1);
}

//OTHER CLEVER SOLUTION
const grow=x=> x.reduce((a,b) => a*b);