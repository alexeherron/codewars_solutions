//REMOVE DUPLICATES FROM LIST
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

//MY SOLUTION
const remDup = arr => [...new Set(arr)];

//OTHER CLEVER SOLUTION

function distinct(arr) {
    let res = []; 
    
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
  }