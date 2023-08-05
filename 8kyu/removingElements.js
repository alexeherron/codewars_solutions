//REMOVING ELEMENTS
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//MY SOLUTION
const remEl = arr => arr.filter((x,i) => i % 2 == 0);

//OTHER CLEVER SOLUTION
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}