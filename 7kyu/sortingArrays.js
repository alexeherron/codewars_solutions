//SORTING ARRAYS
// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.
// Example 1

// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

// Example 2

// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

// Each element in the arrays will start with a unique letter so there will only be a single match for each element.

//MY SOLUTION
function sortingArrays(a1, a2){
    for(i = 0; i < a1.length; i++){
        let a2Word = a2.find(x => x[0] == a1[i][0])
        a1[i] = a2Word;
    }
    return a1;
}

//OTHER CLEVER SOLUTION
const sortArray = (a1, a2) => a1.map( v => a2.find( w => v[0]===w[0] ) );