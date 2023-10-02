//SPLIT STRINGS
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//MY SOLUTION
const solution = str => str.split('').map((x,i) => (i % 2 != 0) ? `${x}*` : x).join('').split('*').filter(x => x.length > 0).map(x => (x.length == 1) ? `${x}_` : x);

//OTHER CLEVER SOLUTION
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}