// CLOSEST TO ZERO
// Simply find the closest value to zero from the list. Notice that there are negatives in the list.

// List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

// Examples:

// [2, 4, -1, -3]  => -1
// [5, 2, -2]      => None
// [5, 2, 2]       => 2
// [13, 0, -6]     => 0

// MY SOLUTION
function closest(arr){
    let posMin = Math.min(...arr.filter(x => x >= 0));
    let negMin = Math.max(...arr.filter(x => x < 0));
    let mins = [posMin, negMin];
    let dist = mins.map(x => Math.abs(x - 0));
    if([...new Set(dist)].length < 2){
        return 'None';
    }
    let distMin = Math.min(...dist);
    return ((posMin == Number(posMin)) && (negMin == Number(negMin)) && (distMin == Number(distMin))) ? mins[dist.indexOf(distMin)] : 'None';
}

// OTHER CLEVER SOLUTION
function closest(arr){
    const sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
    return Math.abs(sorted[0]) !== Math.abs(sorted[1]) ? sorted[0] : null;
}