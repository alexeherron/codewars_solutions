//DECIPHER THIS
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

//MY SOLUTION
function decipherThis(string){
    let words = string.split(' ');
    for(i = 0; i < words.length; i++){
        let num = words[i].replace(/\D/g, '');
        let str = words[i].replace(num, '');
        let last = str[str.length-1];
        str = str.replace(str[str.length-1], str[0])
        str = str.replace(str[0], last)
        words[i] = String.fromCharCode(num) + str;
    }
    return words.join(' ');
}

//OTHER CLEVER SOLUTION
const decipherThis = text => text
    .split(' ')
    .map(e => {
        const num = parseFloat(e) || '';
        const word = e.split(num)[1];

        if (word.length === 1) return String.fromCharCode(num) + word;
        return String.fromCharCode(num) + word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
    })
    .join(' ')