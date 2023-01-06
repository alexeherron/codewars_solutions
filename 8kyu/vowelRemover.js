//VOWEL REMOVER
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//MY SOLUTION
function shortcut(string){
    return string.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o','').replaceAll('u','')
}

//OTHER CLEVER SOLUTIONS
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}

function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
}