//SIMPLE FUN #52: PAIR OF SHOES
// Task

// Yesterday you found some shoes in your room. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.

// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.
// Example

// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [0, 23]]

// the output should be true;

// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [1, 23]]

// the output should be false.
// Input/Output

//     [input] 2D integer array shoes
//     Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

//     Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

//     [output] a boolean value

//     true if it is possible to pair the shoes, false otherwise.

//MY SOLUTION
function pairIt(shoes){
    let ones = [];
    let zeroes = [];
    for(i = 0; i < shoes.length; i++){
        if(shoes[i][0] == 0){
            zeroes.push(shoes[i][1]);
        }else{
            ones.push(shoes[i][1]);
        }
    }
    ones.sort();
    zeroes.sort();
    if(ones.length != zeroes.length){
        return false;
    }
    for(i = 0; i < ones.length; i++){
        if(ones[i] != zeroes[i]){
            return false;
        }
    }
    return true;
}

//OTHER CLEVER SOLUTION
function pairOfShoes(shoes) {
    const serialize = arr => arr.sort().join();
    
      const pairs = shoes.reduce((res, [side, size]) => (res[side].push(size), res), [[], []]);
    return serialize(pairs[0]) === serialize(pairs[1]);
}