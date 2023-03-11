//PRODUCT ARRAY
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
// Notes

//     Array/list size is at least 2 .

//     Array/list's numbers Will be only Positives

//     Repetition of numbers in the array/list could occur.

// Input >> Output Examples

// Explanation:

//     The first element in prod [] array 20 is the product of all array's elements except the first element

//     The second element 12 is the product of all array's elements except the second element .

// productArray ({1,5,2}) ==> return {10,2,5}

//MY SOLUTION
function productArray(arr){
    return arr.map(x => (arr.reduce((acc, item) => acc*item, 1))/x);
}

//OTHER CLEVER SOLUTION
function productArray(numbers)
{
  var sum = numbers.reduce((x, y) => x * y);
  return numbers.map(x => sum / x);
}