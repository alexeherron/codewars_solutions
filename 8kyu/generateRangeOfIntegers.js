// GENERATE RANGE OF INTEGERS
// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
// Examples

// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

// Note

//     start < stop
//     step > 0

// MY SOLUTION
const generateRange = (start, stop, step) => {
    let result = [];
    for(i = start; i <= stop; i += step){
      result.push(i);
    }
    return result;
}

// OTHER CLEVER SOLUTION
function generateRange(min, max, step){
    return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}