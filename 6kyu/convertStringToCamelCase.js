//CONVERT STRING TO CAMEL CASE
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//MY SOLUTION
function stringToCamel(str){
    let arr = str.replaceAll(/(-)|(_)/g, "*").split('*');
    for(i = 1; i < arr.length; i++){
        arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1);
    }
    return arr.join('');
}

//OTHER CLEVER SOLUTION
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}
