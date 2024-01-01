// IS EVERY VALUE IN THE ARRAY AN ARRAY?
// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

// MY SOLUTION
const arrCheck = value => value.every(x => Array.isArray(x));

// OTHER CLEVER SOLUTION
function arrCheck(value){
    let count = 0;
    for(let i = 0; i < value.length; i++){
    if(Array.isArray(value[i]) == true) {count++}  
  }
    return (count === value.length);
}