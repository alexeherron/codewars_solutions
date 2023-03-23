//IS YOUR PERIOD LATE?
// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:
// last - The Date object with the date of the last period
// today - The Date object with the date of the check
// cycleLength - Integer representing the length of the cycle in days
// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

//MY SOLUTION
function periodIsLate(last, today, cycleLength) {
    let diffTime = Math.abs(today - last);
    let diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return (diff > cycleLength) ? true : false;
}

//OTHER CLEVER SOLUTION
function periodIsLate(last, today, cycleLength) {
  return (today-last)/86400000>cycleLength
}