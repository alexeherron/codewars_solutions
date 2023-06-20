//HIGHEST SCORING WORD
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//MY SOLUTION
function highestScore(str){
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let words = str.split(' ');
    let scores = [];
    for(i = 0; i < words.length; i++){
        scores[i] = words[i].split('').map(x => alpha.indexOf(x) + 1).reduce((acc, item) => acc + item, 0);
    }
    return words[scores.findIndex(x => x == Math.max(...scores))];
}

//OTHER CLEVER SOLUTION
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}