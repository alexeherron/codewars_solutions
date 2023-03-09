//CHANGING LETTERS
// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

//MY SOLUTION
function capVowels(string){
    let vowels = /[aeiouAEIOU]/
    let result = []
    for(i = 0; i < string.length; i++){
        if(vowels.test(string[i])){
            result.push(string[i].toUpperCase())
        }else{
            result.push(string[i])
        }
    }
    return result.join('');
}

//OTHER CLEVER SOLUTION
function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}