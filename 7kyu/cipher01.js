//CIPHERS #1 - THE 01 CIPHER
// Ciphers #1 - The 01 Cipher

// This cipher doesn't exist, I just created it by myself. It can't actually be used, as there isn't a way to decode it. It's a hash. Multiple sentences may also have the same result.
// How this cipher works

// It looks at the letter, and sees it's index in the alphabet, the alphabet being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's even, its replaced with 0. Note that the index should start from 0. Also, if the character isn't a letter, it remains the same.
// Example

// encode("Hello World!"); // => "10110 00111!"

// This is because H's index is 7, which is odd, so it is replaced by 1, and so on.

// Have fun (en)coding!

//MY SOLUTION
function encodes(string){
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    string = string.toLowerCase();
    let result = []
    for(i = 0; i < string.length; i++){
        let index = alpha.indexOf(string[i]);
        index < 0 ? result.push(string[i]) : (index % 2 == 0 ? result.push('0') : result.push('1'));
    }
    return result.join('');
}

//OTHER CLEVER SOLUTION
const encode = plaintext => plaintext.replace(/[a-z]/gi, c => 1 - c.charCodeAt(0) % 2)