// FLICK SWITCH
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.
// Examples

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// Notes

//     "flick" will always be given in lowercase.
//     A list may contain multiple flicks.
//     Switch the boolean value on the same element as the flick itself.

// MY SOLUTION
function flickSwitch(arr){
    let switchCount = 0;
    return arr.map(x => {
        if(x == 'flick'){
            switchCount += 1;
        }
        return (switchCount % 2 == 0);
    })
}

// OTHER CLEVER SOLUTION
function flickSwitch(arr){
    let returning = true;
      return arr.map( (v) => {
        return (v === "flick") ? returning = !returning : returning;
      })
}