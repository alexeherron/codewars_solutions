//COUNT CONSONANTS
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//MY SOLUTION
function constCounts(s){
    let consonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
    let result = []
    for(i = 0; i < s.length; i++){
        if(consonants.test(s[i])){
            result.push(s[i]);
        }
    }
    return result.length;
}

//OTHER CLEVER SOLUTION
function consonantCount(str) {
    return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
}