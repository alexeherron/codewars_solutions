//SUM OF NUMBERS
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

//MY SOLUTION
function sumNum(num1, num2){
    let nums = [num1, num2]
    nums.sort((a,b) => a-b)
    for(i = nums[0]+1; i < nums[1]; i++){
        nums.push(i);
    }
    console.log(nums)
    return (num1 == num2) ? num1 : nums.reduce((acc,item) => acc + item);
}

//OTHER CLEVER SOLUTION
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}