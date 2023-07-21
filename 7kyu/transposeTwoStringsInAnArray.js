//TRANSPOSE TWO STRINGS IN AN ARRAY
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);
// should return

// H W  
// e o  
// l r  
// l l  
// o d

// A few things to note:
//     There should be one space in between the two characters
//     You don't have to modify the case (i.e. no need to change to upper or lower)
//     If one string is longer than the other, there should be a space where the character would be

//MY SOLUTION
function transposeTwoStrings(arr){
    let result = '';
    for(i = 0; i < Math.max(arr[0].length, arr[1].length); i++){
        result += `${arr[0][i] || ' '} ${arr[1][i] || ' '}\n`
    }
    return result.substring(0,result.length - 1);
}

//OTHER CLEVER SOLUTION
function transposeTwoStrings(arr){
    var result = [];
    var len = Math.max(arr[0].length, arr[1].length);
    
    for (var i = 0; i < len; i++) {
      var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
      result.push(column);
    }
    
    return result.join("\n");
}