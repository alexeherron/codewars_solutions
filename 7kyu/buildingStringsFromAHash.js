//BUILDING STRINGS FROM A HASH
// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

//MY SOLUTION
const stringHash = obj => {
    let result = [];
    Object.keys(obj)
        .forEach(k => {
            result.push(`${k} = ${obj[k]}`)
        });
    return result.join(',');
}

//OTHER CLEVER SOLUTION
function solution(pairs){
    return Object.keys(pairs)
      .map(function(k) { return k + ' = ' + pairs[k] })
      .join(',');
}