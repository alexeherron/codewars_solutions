//PALINDROME
// Write a function that checks if a given string (case insensitive) is a palindrome.

//MY SOLUTION
function isPalindrome(x){
    let rev = x.split('').reverse().join('').toLowerCase()
    return rev == x.toLowerCase();
}

//OTHER CLEVER SOLUTION
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();