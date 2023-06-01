//REVERSED SEQUENCE
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//MY SOLUTION
const revSeq = n => [...Array(n+1).keys()].reverse().slice(0,n);

//OTHER CLEVER SOLUTION
const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
};