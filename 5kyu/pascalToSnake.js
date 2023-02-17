//CONVERT PASCALCASE STRING INTO SNAKE_CASE
// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
// Examples

// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

//MY SOLUTION
function pascalToSnake(string){
    if(string !== String(string)){
        return String(string);
    }
    let indicies = []
    for(i = 1; i < string.length; i++){
        if((string[i].match(/[a-zA-Z]/g)) && (string[i] === string[i].toUpperCase())){
            indicies.push(i);
        }
    }
    let newString = string.substring(0, indicies[0])
    for(i = 0; i < indicies.length; i++){
        let subs = `_${string.substring(indicies[i], indicies[i+1])}`
        newString += subs;
    }
    return newString.toLowerCase();
}

//OTHER CLEVER SOLUTION
var toUnderscore;

  toUnderscore = function(string) {
    return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
};