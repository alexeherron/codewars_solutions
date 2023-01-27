//PIG LATIN
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//MY SOLUTION
function pigIt(string){
    let prePig = ''
    let sprinkles = ''
    let postPig = []
    if(string.match(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g)){
        prePig = string.substring(0,string.indexOf(string.match(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g))).split(' ')
        sprinkles = string.substring(string.indexOf(string.match(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g)))
        if(string[string.length-2] == ' '){
            sprinkles = ' ' + sprinkles
        }
    }else{
        prePig = string.split(' ')
    }
    prePig = prePig.filter(Boolean)
    for(i = 0; i < prePig.length; i++){
        postPig.push(prePig[i].substring(1) + prePig[i][0] + 'ay')
    }
    return postPig.join(' ') + sprinkles
}

//OTHER CLEVER SOLUTION
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}