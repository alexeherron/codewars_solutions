//MOVING ZEROES TO THE END
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//MY SOLUTION
function moveZeroes(arr){
    let zeroes = []
    let notZeroes = []
    for(i = 0; i < arr.length; i++){
        if((arr[i] === 0) || (arr[i] === +0)){
            zeroes.push(arr[i]);
        }else{
            notZeroes.push(arr[i])
        }
    }
    notZeroes.push(...zeroes)
    return notZeroes
}

//OTHER CLEVER SOLUTION
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}