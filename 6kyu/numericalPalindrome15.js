//NUMERICAL PALINDROME 1.5
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

// For this kata, single digit numbers will NOT be considered numerical palindromes.

// palindrome(6,4) => [11,22,33,44]
// palindrome(59,3) => [66,77,88]
// palindrome(101,2) => [101,111]
// palindrome("15651",5) => "Not valid" 
// palindrome(1221,"8") => "Not valid" 

//MY SOLUTION
function palindrome(num, s){
    if([num, s].some(x => (x < 0) || (x % 1 != 0) || (x !== Number(x)))){
        return 'Not valid';
    }
    let result = [];
    while(result.length < s){
        if((String(num).length > 1) && (String(num).split('').reverse().join('') == String(num))){
            result.push(num);
        }
        num++;
    }
    return result;
}

//OTHER SOLUTION
const palindrome = (num, s) => {
    if (num + s !== Math.abs(num + s)) return 'Not valid';
    
    const isPalindrome = num => num > 10 && num === +[...`${num}`].reverse().join``;
      
    const result = []
    while (s) isPalindrome(num++) && result.push(num-1) && s--;
    
    return result;
}