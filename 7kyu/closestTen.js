//RETURN THE CLOSEST NUMBER MULTIPLE OF TEN
// Given a number return the closest number to it that is divisible by 10.

// Example input:
// 22
// 25
// 37

// Expected output:
// 20
// 30
// 40

//MY SOLUTION
const closestMultiple = num => Math.round(num/10)*10;

//OTHER CLEVER SOLUTION
const closestMultiple10 = num => {
    num = (num / 10).toFixed() * 10;
    
    
    return num;
  };