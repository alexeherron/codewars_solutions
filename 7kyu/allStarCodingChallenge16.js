//ALL STAR CODE CHALLENGE #16
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #16

// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"

// Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string

//MY SOLUTION
function noRepeat(string){
    let nonRep = [];
    for(i = 0; i < string.length; i++){
        if(string.split('').filter(x => x == string[i]).length == 1){
            nonRep.push(string[i]);
        }
    }
    return nonRep[0];
}

//OTHER CLEVER SOLUTION
function noRepeat(str) {  
    for(var i of str) if(str.split(i).length == 2) return i
  }