//MUMBLING
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

//MY SOLUTION
const accum = string => string.split('').map((x,i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join('-');

//OTHER CLEVER SOLUTION
function accum(s) {
	return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}