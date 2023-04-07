//COUNT CHARACTERS IN YOUR STRING
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//MY SOLUTION
function countChar(string){
    let count = {};
    for(i = 0; i < string.length; i++){
        if(Object.keys(count).includes(string[i])){
            count[string[i]] += 1;
        }else{
            count[string[i]] = 1;
        }
    }
    return count;
}

//OTHER CLEVER SOLUTION
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}