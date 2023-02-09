//SUM OF CUBES
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

//MY SOLUTION
function sumCubes(n){
    let resArray = []
    for(i = 1; i <= n; i++){
        resArray.push(Math.pow(i,3));
    }
    return resArray.reduce((acc,x) => acc + x,0);
}

//OTHER CLEVER SOLUTION
function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
}

//ANOTHER ONE
function sumCubes(n){
    if (n == 1) {
      return n**3;
    } else {
      return n**3 + sumCubes(n - 1);
    }
}