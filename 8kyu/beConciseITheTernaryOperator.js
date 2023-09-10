//BE CONCISE I - THE TERNARY OPERATOR
// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

//     If the age is 12 or lower, it return "You're a(n) kid"
//     If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
//     If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
//     If the age is 65 or above, it return "You're a(n) elderly"

// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

//MY SOLUTION
const describeAge = a => (a <= 12) ? "You're a(n) kid" : (a <= 17) ? "You're a(n) teenager" : (a <= 64) ? "You're a(n) adult" : "You're a(n) elderly";

//OTHER CLEVER SOLUTION
function describeAge(a){
    return (a <= 12) ? "You're a(n) kid" : (a <= 17) ? "You're a(n) teenager" : (a <= 64) ? "You're a(n) adult" : "You're a(n) elderly";
}