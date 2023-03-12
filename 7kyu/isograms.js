//ISOGRAMS
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//MY SOLUTION
function isIsogram(string){
    let word = string.toLowerCase().split('');
    for(i = 0; i < word.length; i++){
        let letter = word[i];
        let newWord = word.slice(i+1,)
        if(newWord.includes(letter)){
            return false;
        }
    }
    return true;
}

//OTHER CLEVER SOLUTION
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}