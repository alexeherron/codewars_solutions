//REGEX COUNT LOWERCASE LETTERS
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

//MY SOLUTION
const countLower = str => str.split('').filter(x => 'abcdefghijklmnopqrstuvwxyz'.includes(x)).length;

//OTHER CLEVER SOLUTION
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}