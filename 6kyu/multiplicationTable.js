//MULTIPLICATION TABLE
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

//MY SOLUTION
function multTable(n){
    let result = []
    for(i = 1; i <= n; i++){
        let internal = [];
        internal.push(i);
        for(j = 0; j < n-1; j++){
            internal.push(internal[0] + internal[j])
        }
        result.push(internal);
    }
    return result;
}

//OTHER CLEVER SOLUTION
multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
}