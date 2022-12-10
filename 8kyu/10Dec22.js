// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//MY SOLUTION
let testArray = [2, 1, 10];
function sumDiff(array){
    let dif = [];
    let descending = array.sort((a, b) => b - a);
    for(i = 0; i < array.length -1; i++){
        dif.push(descending[i] - descending[i + 1])
    }
    let sum = dif.reduce((acc, item) => acc + item, 0)
    if(array.length == 0 || array.length == 1){
        sum = 0;
    }
    return sum;
}
alert(sumDiff(testArray));

//OTHER CLEVER SOLUTION
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}