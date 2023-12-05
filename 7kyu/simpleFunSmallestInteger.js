// SIMPLE FUN #204: SMALLEST INTEGER
// Task

// You're given a two-dimensional array of integers matrix. Your task is to determine the smallest non-negative integer that is not present in this array.
// Input/Output

//     [input] 2D integer array matrix

// A non-empty rectangular matrix.

// 1 ≤ matrix.length ≤ 10

// 1 ≤ matrix[0].length ≤ 10

//     [output] an integer

// The smallest non-negative integer that is not present in matrix.
// Example

// For

//   matrix = [  [0, 2],  [5, 1]] the result should be 3

// 0,1,2,(3)...5

// MY SOLUTION
function smallestInteger(matrix) {
    let pos = matrix.flat().filter(x => (x > -1));
    let sorted = pos.sort((a,b) => a-b);
    let sortedSet = [...new Set(sorted)]
    if(Math.min(...sortedSet) != 0){
      return 0;
    }
    for(i = 1; i < sortedSet.length; i++){
      if(!(sortedSet[i-1] + 1 == sortedSet[i])){
        return sortedSet[i-1] + 1;
      }
    }
    return Math.max(...sortedSet) + 1;
}

// OTHER CLEVER SOLUTION
function smallestInteger(matrix) {
    var num = 0;
    while (matrix.some(x=>x.indexOf(num)>=0)) {
          num++;
          }
    return num;
}
