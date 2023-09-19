//DAD IS COMMATOSE
// Your dad doesn't really get punctuation, and he's always putting extra commas in when he posts. You can tolerate the run-on sentences, as he does actually talk like that, but those extra commas have to go!

// Write a function called dadFilter that takes a string as argument and returns a string with the extraneous commas removed. The returned string should not end with a comma or any trailing whitespace.

//MY SOLUTION
const dadFilter = str => {
    let word = str.trim().split('').map((x,i) => (x == ',' && str[i-1] == ',') ? '' : (str[i] == ',' && i == str.length-1) ? 'blah' : x).join('').trim();
    if(word[word.length-1] == ','){
        return word.slice(0,word.length-1);
    }
    return word;
}

//OTHER CLEVER SOLUTION
const dadFilter = str => str.replace(/,(?=,)|,\s*$/g,'');