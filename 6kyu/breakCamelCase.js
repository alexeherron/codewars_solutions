//BREAK CAMELCASE
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//MY SOLUTION
function breakCamel(string){
    return string.split('').map(x => (x === x.toUpperCase()) ? ` ${x}` : x).join('');
}

//OTHER CLEVER SOLUTION
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
}