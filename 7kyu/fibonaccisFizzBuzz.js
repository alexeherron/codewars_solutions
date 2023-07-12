//FIBONACCI'S FIZZBUZZ
// The goal of this kata is two-fold:

// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

// For the sake of this kata, you can assume all input will be a positive integer.

// Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

// Examples
// Input:
// fibsFizzBuzz(5)
// Output:
// [ 1, 1, 2, 'Fizz', 'Buzz' ]

// Input:
// fibsFizzBuzz(1)
// Output:
// [1]

// Input:
// fibsFizzBuzz(20)
// Output:
// [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]

//MY SOLUTION
function fibFizzBuzz(num){
    let result = new Array(num).fill(1).reduce((arr, _ ,i) => {
        arr.push((i <= 1) ? 1 : arr[i-2] + arr[i-1])
        return arr
    },[]) ;
    return result.map(x => (x % 15 == 0) ? 'FizzBuzz' : (x % 5 == 0) ? 'Buzz' : (x % 3 == 0) ? 'Fizz' : x);
}

//OTHER CLEVER SOLUTION
function fibsFizzBuzz(n) {
    let res = [], [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
      [a, b] = [b, a + b];
      res.push(a % 15 == 0 ? 'FizzBuzz' :
        a % 3 == 0 ? 'Fizz' : a % 5 == 0 ? 'Buzz' : a);
    }
    return res;
}