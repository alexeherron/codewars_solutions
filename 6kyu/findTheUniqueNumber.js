//FIND THE UNIQUE NUMBER
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//MY SOLUTION
function findUniq(array){
    let sub = array.slice(0,3);
    let replaceable;
    for(i = 0; i < sub.length; i++){
        if(sub.filter(x => x == sub[i]).length > 1){
            replaceable = sub[i];
        }
    }
    let sneaky = array.join('').indexOf('-');
    let extraSneak = array.join('').indexOf('e');
    if(sneaky > -1 && extraSneak < 0){
        return array.filter(x => x < 0)[0];
    }
    return Number(array.join('').replaceAll(replaceable, ''));
}

//OTHER CLEVER SOLUTION
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}