//ARRAY DEEP COUNT
// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
// Examples

// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7

// The input will always be an array.

//MY SOLUTION
function deepCount(array){
    let arr = array;
    let depth = 0;
    let flatCount = array.flat(Infinity).length;
    while(arr.filter(x => Array.isArray(x)).length > 0){
        depth += arr.filter(x => Array.isArray(x)).length;
        arr = arr.flat();
    }
    return flatCount + depth;
}

//OTHER CLEVER SOLUTION
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}