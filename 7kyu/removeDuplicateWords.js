//REMOVE DUPLICATE WORDS
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

//MY SOLUTION
function removeDuplicates(string){
    let stringList = string.split(' ');
    let result = [];
    for(i = 0; i < stringList.length; i++){
        if(!result.includes(stringList[i])){
            result.push(stringList[i]);
        }
    }
    return result.join(' ');
}

//OTHER CLEVER SOLUTION
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')