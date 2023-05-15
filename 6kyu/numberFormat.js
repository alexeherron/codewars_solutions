//NUMBER FORMAT
// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902'.

//MY SOLUTION
function numFormat(num){
    let reversed = String(num).split('').reverse();
    let neg = '';
    if(reversed[reversed.length - 1] == '-'){
        neg = '-';
        reversed.pop();
    }
    let commify = reversed.map((x,i) => ((i+1) % 3 == 0 && (i != reversed.length-1)) ? `,${x}` : x);
    return neg + commify.reverse().join('');
}

//OTHER CLEVER SOLUTION
numberFormat = n => n.toLocaleString()