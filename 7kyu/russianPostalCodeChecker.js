//RUSSIAN POSTAL CODE CHECKER
// You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning true or false.

// A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.

// Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9
// Examples

// Valid postcodes:

//     198328
//     310003
//     424000

// Invalid postcodes:

//     056879
//     12A483
//     1@63
//     111

//MY SOLUTION
const postal = str => (str.length !== 6) ? false : !(str.split('').every(x => '0123456789'.includes(x))) ?  false : ('05789'.includes(str[0])) ? false : true;

//OTHER CLEVER SOLUTION
function zipvalidate(postcode){
    return /^[12346]\d{5}$/.test(postcode)
}//z.