//FLATTEN
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

//MY SOLUTION
//const flatten = array => array.flat();

//OTHER CLEVER SOLUTION
var flatten = function (lol){
    return [].concat.apply([],lol);
  }