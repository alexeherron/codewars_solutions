//DIGITS EXPLOSION
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// "312" should return "333122"

// "102269" should return "12222666666999999999"

//MY SOLUTION
const digitsExplosion = str => str.split('').map(x => x.repeat(Number(x))).join('');

//OTHER CLEVER SOLUTION
function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}