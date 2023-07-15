//VOWEL-CONSONANT LEXICON
// If we alternate the vowels and consonants in the string "have", we get the following list, arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'have', 'heva', 'vahe', 'veha']. These are the only possibilities in which vowels and consonants are alternated. The first element, ahev, is alphabetically lowest.

// Given a string:

//     alternate the vowels and consonants and return the lexicographically lowest element in the list
//     If any two or more vowels or consonants must follow each other, return "failed"
//     if the number of vowels and consonants are equal, the first letter of the result must be a vowel.

// Examples:

// solve("codewars") = "failed". However you alternate vowels and consonants, two consonants must follow each other
// solve("oruder") = "edorur"
// solve("orudere") = "ederoru". This is the only option that allows you to alternate vowels & consonants.

// Vowels will be any of "aeiou". Input will be a lowercase string, no spaces. See test cases for more examples.

//MY SOLUTION
function vowelConsonant(str){
    let vowelList = 'aeiou'.split('');
    let vowels = str.split('').filter(x => vowelList.includes(x)).sort();
    let consonants = str.split('').filter(x => !vowelList.includes(x)).sort();
    if(Math.abs(vowels.length - consonants.length) > 1){
        return 'failed';
    }
    if(vowels.length == consonants.length){
        let result = [];
        for(i = 0; i < vowels.length; i++){
            result.push([vowels[i],[consonants[i]]].join(''));
        }
        return result.join('');
    }else{
        let longest;
        let shortest;
        if(vowels.length > consonants.length){
            longest = vowels;
            shortest = consonants;
        }else{
            longest = consonants;
            shortest = vowels;
        }
        let result = [];
        for(i = 0; i < shortest.length; i++){
            result.push([longest[i], shortest[i]].join(''));
        }
        return [result.join(''), longest[longest.length - 1]].join('');
    }
}

//OTHER CLEVER SOLUTION
function solve(s) {

    let a = s.match(/[^aeiou]/g).sort();
    let b = s.match(/[aeiou]/g).sort();
    let r = '';
    
    if (a.length > b.length)
      [a, b] = [b, a];
      
    if (b.length - a.length > 1)
      return 'failed';
      
    return b
      .map((c, i) => c + (a[i] || ''))
      .join('');
    
  };