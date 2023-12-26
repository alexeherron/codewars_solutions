// EXCLAMATION MARKS SERIES #4: REMOVE ALL EXCLAMATION MARKS FROM A SENTENCE
// BUT ENSURE AN EXCLAMATION MARK AT THE END
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

// MY SOLUTION
const remove = string => `${string.replaceAll('!','')}!`;

// OTHER CLEVER SOLUTION
const remove = s => s.replace(/!+/g, "")+"!";