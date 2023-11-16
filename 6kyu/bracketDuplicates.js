// BRACKET DUPLICATES
// Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

// For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

// Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.

// MY SOLUTION
const braketDups = str => {
    return (str === String(str)) ?  str
    .split('')
    .map((x,i,arr) => (x != arr[i + 1]) ? `${x}*` : x)
    .join('')
    .split('*')
    .map(x => (x.length > 2) ? `${x.substring(0,2)}[${x.substring(2)}]` : x)
    .join('')
  : 'Please enter a valid string';
}

// OTHER CLEVER SOLUTION
function stringParse(string){
    if(string + "" !== string) return "Please enter a valid string";
    return string.replace(/(.)\1(\1+)/g,"$1$1[$2]");
}