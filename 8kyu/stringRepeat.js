//STRING REPEAT
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//MY SOLUTION
function strRepeat(str,n){
    let result = "";
    for(i = 1; i <= n; i++){
        result += str;
    }
    return result;
}

//OTHER CLEVER SOLUTION
function repeatStr (n, s) {
    return s.repeat(n);
}