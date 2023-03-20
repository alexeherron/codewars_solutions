//MYSTERIOUS SINGULARITY NUMBERS
// The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].
// Example

// Let's take the number 5 as an example:

//     1 - doesn't divide integer by 2, 3, and 5
//     2 - divides integer by 2
//     3 - divides integer by 3
//     4 - divides integer by 2
//     5 - divides integer by 5

// Answer: 1

// because only one number doesn't divide integer by any of 2, 3, 5
// Note
// Again, try to think of a formula that will shorten your solution and help you pass big tests.

//MY SOLUTION

const singularity = n => [...Array(n).keys()].filter(x => (x % 2 !== 0) && (x % 3 !== 0) && (x % 5 !== 0)).length;

//MY SOLUTION WORKS, BUT TAKES > 12 SECONDS ON TESTS GREATER THAN 900000
//I UNLOCKED THE SOLUTIONS AND HERE'S THE ONE I UNDERSTAND THE MOST:
function realNumbers(n) {
    let count = n;
    count -= Math.floor(n/2); // вычетаем количество чисел, делящихся на 2
    count -= Math.floor(n/3); // вычетаем количество чисел, делящихся на 3
    count -= Math.floor(n/5); // вычетаем количество чисел, делящихся на 5
    count += Math.floor(n/6); // прибавляем количество чисел, делящихся на 2 и на 3
    count += Math.floor(n/10); // прибавляем количество чисел, делящихся на 2 и на 5
    count += Math.floor(n/15); // прибавляем количество чисел, делящихся на 3 и на 5
    count -= Math.floor(n/30); // вычетаем количество чисел, делящихся на 2, на 3 и на 5 одновременно
    return count;
}