//ALPHABET SYMMETRY
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

//MY SOLUTION
function solve(arr){
    let lowerArr = arr.map(x => x.toLowerCase());
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for(i = 0; i < lowerArr.length; i++){
        let word = lowerArr[i].split('');
        let pushIt = 0;
        for(j = 0; j < word.length; j++){
            if(word[j] == alpha[j]){
                pushIt += 1;
            }
        }
        result.push(pushIt);
    }
    return result;
}

//OTHER CLEVER SOLUTION
function solve(arr){  
    var alphabeth = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};