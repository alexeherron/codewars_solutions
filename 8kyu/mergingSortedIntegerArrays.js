//MERGING SORTED INTEGER ARRAYS
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//MY SOLUTION
const merging = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort((a,b) => a-b);

//OTHER CLEVER SOLUTION
function mergeArrays(a, b) {
    let merge = [...a, ...b].sort()
    let unique = new Set(merge)
    return Array.from(unique).sort((a,b)=> a-b)
}