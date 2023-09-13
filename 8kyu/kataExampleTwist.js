//KATA EXAMPLE TWIST
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

//MY SOLUTION
var websites = []
for(i = 0; i < 1000; i++){
  websites.push('codewars')
}

//OTHER CLEVER SOLUTION
var websites = new Array(1000).fill("codewars");