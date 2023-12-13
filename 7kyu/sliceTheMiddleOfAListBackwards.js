// SLICE THE MIDDLE OF A LIST BACKWARDS
// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

// MY SOLUTION
function reverseMiddle(array) {
    let start = (array.length % 2 == 0) ? array.length/2 - 1 : Math.floor(array.length/2) - 1;
    let end = (array.length % 2 == 0) ? array.length/2 + 1 : Math.ceil(array.length/2) + 1;
    let middle = array.reverse().slice(start, end);
      return middle; 
}

// OTHER CLEVER SOLUTION
function reverseMiddle(a){
    let n = a.length, k = n>>1
    return a.slice(k-1,k+1+n%2).reverse()
}