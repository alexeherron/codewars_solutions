// ALPHABETICAL SEQUENCE
// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.
// Example

// alphaSeq("ZpglnRxqenU") -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"

// Technical Details

//     The string will include only letters.
//     The first letter of each sequence is uppercase followed by n-1 lowercase.
//     Each sequence is separated with a comma.
//     Return value needs to be a string.

// MY SOLUTION
function alphaSeq(str){
    // First, turn the string into an alphabetized array, all lowercase.
    let lowerAlpha = str.toLowerCase().split('').sort();
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    // Next, map the array to create an uppercase letter concatenated with the correct number of lowercase letters. And join with commas.

    return lowerAlpha.map(x => (`${x.toUpperCase()}${x.repeat(alpha.indexOf(x))}`)).join(',');
}

// OTHER CLEVER SOLUTION
const alphaSeq=(s) => [...s.toLowerCase()].sort().map(c=>c.toUpperCase()+c.repeat(c.charCodeAt()-97)).join`,`;