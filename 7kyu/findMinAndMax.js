//FIND MIN AND MAX
// Implement a function that returns the minimal and the maximal value of a list (in this order).

//MY SOLUTION
const minMax = arr => [Math.min(...arr), Math.max(...arr)];

//OTHER CLEVER SOLUTION
function getMinMax(arr){
    const sorted = arr.sort((a,b)=>a-b)
    return [sorted[0], sorted[sorted.length - 1]]
};