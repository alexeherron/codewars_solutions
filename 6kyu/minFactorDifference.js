//MIN FACTOR DIFFERENCE
// Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

// Example:

// 13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

// Hence the asnwer will be 2 (=13-11)

//MY SOLUTION
function minFactorDiff(num){
    let factors = Array.from(Array(num + 1), (_, i) => i).filter(i => num % i === 0);
    let diffs = factors.map((x,i) => factors[i+1] - x);
    diffs = diffs.slice(0, diffs.length-1);
    console.log(diffs);
    return Math.min(...diffs);
}

//OTHER CLEVER SOLUTION
function minDistance(n){
    dmin = n;
    fprev = 1;
    for(i=2;i<=n;i++){
      if(n%i==0){
        dmin = Math.min(dmin, i - fprev)
        fprev = i
      }
    }
    return dmin;
}