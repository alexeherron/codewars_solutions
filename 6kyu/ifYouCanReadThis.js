//IF YOU CAN READ THIS
// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:
// If, you can read?

// Output:
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

//     There are preloaded dictionary you can use, named NATO
//     The set of used punctuation is ,.!?.
//     Punctuation should be kept in your return string, but spaces should not.
//     Xray should not have a dash within.
//     Every word and punctuation mark should be seperated by a space ' '.
//     There should be no trailing whitespace

//MY SOLUTION
function indiaFoxtrot(string){
    let h =  {
        "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "Xray",
        "Y": "Yankee", "Z": "Zulu", ",": ",", "." : ".", "!" : "!", "?" : "?"
      }
    let squashed = string.replaceAll(" ", "");
    return [...squashed.toUpperCase()].map(x => h[x]).join(' ');
}

//OTHER CLEVER SOLUTION
function to_nato(words) {
    return words.replace(/\s/g, '').toLowerCase().split('').map(e => NATO[e] ? NATO[e] : e).join(' ');
}