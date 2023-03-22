//MISPELLED WORD
// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed') # returns True
// mispelled('versed', 'applb') # returns False
// mispelled('versed', 'v5rsed') # returns True
// mispelled('1versed', 'versed') # returns True
// mispelled('versed', 'versed') #returns True 

// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

//MY SOLUTION
function mispelled(word1, word2){
    let wrong1 = 0;
    for(i = 0; i < word1.length; i++){
        if(word1[i] !== word2[i]){
            wrong1 += 1;
        };
    }
    if(Math.abs(word1.length - word2.length) == 1 && (word1.includes(word2) || word2.includes(word1))){
        return true;
    }
    return (wrong1 < 2) ? true : false;
}

//OTHER CLEVER SOLUTION
var mispelled = function(word1, word2)
{
  if(Math.abs(word1.length - word2.length) > 1) return false
  if(~word1.indexOf(word2) || ~word2.indexOf(word1)) return true
  return word1.split('').filter((e,i)=>e!=word2[i]).length==1
}