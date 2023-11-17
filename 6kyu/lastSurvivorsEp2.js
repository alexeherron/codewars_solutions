// LAST SURVIVORS EP 2
// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".

// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"

// Notes

//     The order of letters in the result is not important.
//     The letters "zz" transform into "a".
//     There will only be lowercase letters.

// MY SOLUTION
function lastSurvivors(str){
    let alpha = 'zabcdefghijklmnopqrstuvwxyz';
    let word = str.split('');
    while(word.length > [...new Set(word)].length){
        for(i = 0; i < word.length; i++){
            if(word.filter(x => x == word[i]).length > 1){
                let char = word[i];
                let next = alpha[alpha.indexOf(char) + 1];
                word.splice(word.indexOf(char),1, next);
                word.splice(word.indexOf(char),1);
            }
        }
    }
    return word.join('');
}

// OTHER CLEVER SOLUTION
const distance = (a,b) => (a.charCodeAt() + 26 - b.charCodeAt()) % 26; 
const support  = (c,str) => ~~[...str].reduce((acc,curr) => 2 ** -distance(c,curr) + acc, 0);

const lastSurvivors = str => [...'abcdefghijklmnopqrstuvwxyz'].filter(c => support(c,str) % 2).join('');