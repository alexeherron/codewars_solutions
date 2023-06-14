//SUM OF ODD NUMBERS
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//MY SOLUTION
function sumOddPyramid(n){
    let arr = [1];
    for(i = 1; i < n; i++){
        arr[i] = arr[i-1] + i*2;
    }
    let level = [...Array(n).fill(arr[n-1])].map((x,i) => x + (i*2)).reduce((acc, item) => acc + item, 0);
    return level;
}

//OTHER CLEVER SOLUTION
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}