//NUMBERS IN STRINGS
// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

//MY SOLUTION
const solve = str => str.split('').map(x => ('abcdefghijklmnopqrstuvwxyz'.includes(x)) ? '*' : x).join('').split('*').map(x => Number(x)).sort((a,b) => a-b).reverse()[0];

//OTHER CLEVER SOLUTION
function solve(s){
    return Math.max(...s.match(/\d+/g));
};