//DOMINANT ARRAY ELEMENTS
// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

// More examples in the test cases.

// Good luck!

//MY SOLUTION
const dominant = arr => arr.filter((x, i) => arr.slice(i+1).every(y => y < x));

//OTHER CLEVER SOLUTION
function solve(arr){
    var result=[]
    for(var i=0;i<arr.length;i++){
       if(arr[i]>Math.max(...arr.slice(i+1, arr.length)))
           result.push(arr[i])
    }
    return result;
};