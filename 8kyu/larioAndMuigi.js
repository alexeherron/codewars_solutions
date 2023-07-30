//LARIO AND MUIGI PIPE PROBLEM
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Task

// Given the a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example

// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

//MY SOLUTION
// const larioAndMuigi = arr => [...Array(Math.max(...arr)).keys()].map(x => x+1).filter(x => x >= Math.min(...arr));

function pipeFix(arr){
    let result = []
    for(i = Math.min(...arr); i < Math.max(...arr)+1; i++){
        result.push(i);
    }
    return result;
}

//OTHER CLEVER SOLUTION
function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
}