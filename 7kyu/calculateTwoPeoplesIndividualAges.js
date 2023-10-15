// CALCULATE TWO PEOPLE'S INDIVIDUAL AGES
// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

//     sum < 0
//     difference < 0
//     Either of the calculated ages come out to be negative

// MY SOLUTION
const twoAges = (sum, diff) => (sum < 0) ? null : (diff < 0) ? null : [((sum + diff)/2), ((sum - diff)/2)].some(x => x < 0) ? null : [((sum + diff)/2), ((sum - diff)/2)];

// OTHER CLEVER SOLUTION
function getAges(sum,difference){

    let average = 0;
    if (sum < 0 || difference < 0 || sum - difference < 0) return null;
    else average = (sum - difference) /2;
    
    return [average+difference, average];
};