// ALWAYS PERFECT
// While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

// So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

// If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

// If string contains 4 numbers but not consecutive it returns "not consecutive".

// MY SOLUTION
function alwaysPerfect(str){
    let perfList = str.split(',').map(x => Number(x));
    if((!perfList.every(x => x === Number(x))) || (perfList.length != 4) || (perfList.some(x => (x <= 0)))){
        return 'incorrect input';
    }
    if(!perfList.every((x,i) => ((x == perfList[i + 1] - 1) || (!perfList[i + 1])))){
        return 'not consecutive';
    }
    let perfSq = perfList.reduce((acc, item) => acc * item, 1) + 1;
    let squirt = Math.sqrt(perfSq);
    return `${perfSq}, ${squirt}`;
}

// OTHER CLEVER SOLUTION
function checkRoot(string) {
    var parts = string.split(",")
    if (parts.length != 4 || parts.some(isNaN)) return "incorrect input"
    if (parts.some((x, i) => i > 0 && x - parts[i - 1] != 1)) return "not consecutive"
    var n = parts.reduce((n, x) => n * x, 1) + 1
    var p = Math.sqrt(n)
    return `${n}, ${p}`
}