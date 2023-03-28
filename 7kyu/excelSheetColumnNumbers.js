//EXCEL SHEET COLUMN NUMBERS
// Write a function
// titleToNumber(title) or title_to_number(title) or titleToNb title ...
// (depending on the language)
// that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

// Examples:
// titleTonumber('A') === 1
// titleTonumber('Z') === 26
// titleTonumber('AA') === 27

// Note for Clojure:
// Don't use Java Math/pow (even with bigint) because there is a loss of precision 
// when the length of "title" is growing. 
// Write your own function "exp [x n]".

//MY SOLUTION
function titleToNumber(title){
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const eachOne = x => alpha.indexOf(x)+1;
    let titleArrayReversed = title.split('').reverse();
    return (titleArrayReversed.map((x,i) => eachOne(x)*(26**i)).reduce((acc, c) => acc + c, 0));
}

//OTHER CLEVER SOLUTION
function titleToNumber(title) {
    return title.split("").map(x=> x.charCodeAt(0)-64).reduce((x,y)=> x*26+y)
}