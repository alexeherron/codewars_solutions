//GRASSHOPPER SUMMATION
// Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//MY SOLUTION
function summation(num){
    let sum = 0;
    for(i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

//OTHER CLEVER SOLUTION
const summation = n => n * (n + 1) / 2;