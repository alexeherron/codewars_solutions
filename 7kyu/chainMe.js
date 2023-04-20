//CHAIN ME
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// returns 90;

//MY SOLUTION
function chain(num, funcArr){
    let feed = [num];
    for(i = 0; i < funcArr.length; i++){
        feed = feed.map(x => funcArr[i](x));
    }
    return feed[0];
}

//OTHER CLEVER SOLUTION
function chain(v, fns) {
    return fns.reduce(function(v, fn) { return fn(v) }, v);
}