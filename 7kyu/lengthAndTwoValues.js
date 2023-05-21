//LENGTH AND TWO VALUES
// Given an integer n and two other values, build an array of size n filled with these two values alternating.
// Examples

// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

// Good luck!

//MY SOLUTION
function lengthAndTwo(n, v1, v2){
    let result = [];
    for(i = 0; i < n; i++){
        if(i % 2 == 0){
            result.push(v1);
        }else{
            result.push(v2);
        }
    }
    return result;
}

//OTHER CLEVER SOLUTION
function alternate(n, firstValue, secondValue){
    return Array.from({length:n}, (_,i)=>i%2===0?firstValue:secondValue);
}