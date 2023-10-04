//DOUBLE TROUBLE
// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
// Example:
// x = [1, 2, 3, 4, 5]
// t = 3
// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
// [1, 3, 4, 5]
// Work through the array from left to right.
// Return the resulting array.

//MY SOLUTION
// const doubleTrouble = (arr, t) => arr.map((x,i) => (x + arr[i-1] == t) ? '' : x).filter(x => x != '');
const doubleTrouble = (arr, t) => {
    for(i = 1; i < arr.length; i++){
        let last = arr.slice(0,i).filter(x => x != '').reverse()[0];
        if(arr[i] + last == t){
            arr = arr.map((x,ind) => (ind == i) ? '' : x);
        }
    }
    return arr.filter(x => x != '');
}

//OTHER CLEVER SOLUTION
function trouble(x, t){
	var newArray = [x[0]];
	for (i = 1; i < x.length; i++) {
		if (x[i] + newArray[newArray.length-1] != t) {
			newArray.push(x[i])
		} 
	}
	return newArray;
}