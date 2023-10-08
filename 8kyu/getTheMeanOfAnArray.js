// GET THE MEAN OF AN ARRAY
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//MY SOLUTION
const getAverage = arr => Math.floor((arr.reduce((acc, item) => acc + item, 0))/arr.length);

// OTHER CLEVER SOLUTION
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}