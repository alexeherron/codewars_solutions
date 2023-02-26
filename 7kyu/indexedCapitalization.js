//INDEXED CAPITALIZATION
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

//     capitalize("abcdef",[1,2,5]) = "aBCdeF"
//     capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

//MY SOLUTION
function indexCap(string, array){
    console.log(string.indexOf(string[10]))
    for(i = 0; i < string.length; i++){
        if(array.includes(i)){
            string = string.substring(0,i) + string[i].toUpperCase() + string.substring(i+1,)
        }
    }
    return string;
}

//OTHER CLEVER SOLUTION
let capitalize = (s, a) => s.split``.map((c, i) => a.includes(i) ? c.toUpperCase() : c).join``;