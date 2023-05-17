//MOST LIKELY
// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

//MY SOLUTION
const likely = (str1, str2) => str1.split(':').map(x => Number(x)).reduce((acc, item) => acc/item) > str2.split(':').map(x => Number(x)).reduce((acc, item) => acc/item);

//OTHER CLEVER SOLUTION
const divide = (a, b) => a / b;
const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));