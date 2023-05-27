//NAME SHUFFLER
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//MY SOLUTION
const nameShuffler = str => str.split(' ').reverse().join(' ');

//OTHER CLEVER SOLUTION
function nameSuffle(str){
    var arr = str.split(" ");
    return arr[1] + ' ' + arr[0]
  }