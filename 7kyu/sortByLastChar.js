//SORT BY LAST CHAR
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//MY SOLUTION
function lastChar(x){
    let arr = x.split(' ');
    arr.sort((a,b) => {
        const lastA = a[a.length-1];
        const lastB = b[b.length-1];
        if(lastA < lastB){
            return -1;
        }
        if(lastA > lastB){
            return 1;
        }
        return 0;
    })
    return arr;
}

//OTHER CLEVER SOLUTION
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}