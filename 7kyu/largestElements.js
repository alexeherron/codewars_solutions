//LARGEST ELEMENTS
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// # => [6,7]

//MY SOLUTION
function largestElements(n, list){
    sorted = list.sort((a,b) => a-b)
    let result = []
    console.log(sorted)
    for(i = 1; i <= n; i++){
        result.push(sorted[sorted.length-i]);
    }
    result = result.sort((a,b) => a-b)
    return result
}

//OTHER CLEVER SOLUTION
function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}