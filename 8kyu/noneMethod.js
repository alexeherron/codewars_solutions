//NONE METHOD
// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

//MY SOLUTION
function none(arr, fun){
    let newArr = arr.map(item => fun(item));
    return newArr.some(x => x == true) ? false: true;
}

//OTHER CLEVER SOLUTION
function none(arr, fun){
    return !arr.some(fun);
}