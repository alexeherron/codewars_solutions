//PORTION OF ARRAY
// You will be given an Array(a), starting position (i) and number of portion to return (n) . Your task is to return n portion of the array (a) starting from position (i ). The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion. In case you can not find the exact n portion of elements counting from the starting position i or the starting position i is out of the index of the array, you should return -1 (throw an ArgumentOutOfRangeException in C#).

// example:

// function p([1,2,3,4],1,2)
//  should return [2,3]
 
//  how ?
//  Array => [1,2,3,4]
//            | | | |
//  index =>  0 1 2 3
//  portion     |_|   => [2,3]
 
// function p([1,2,3,4],-1,2)
//  should return [2,3]
 
//  how ?
//  Array => [1,  2,  3, 4]
//            |   |   |  |
//  index=>   -3 -2  -1  0
//  portion=>     |___|      =>[2,3]    
 
// function p([1],1,5)
//  should return -1

// how ? 
// Array => [1]
//           | 
// index=>   0
// required starting index =>1 , which does not exist so we return -1

//MY SOLUTION
function portion(a, i, n){
    let sliced = a.slice(i,(i+n));
    if(i < 0){
        sliced = a.reverse().slice((-i),(n-i)).reverse();
    }
    if(sliced.length != n || a[Math.abs(i)] == null){
        return -1;
    }
    return sliced;
}

//OTHER CLEVER SOLUTION
function portion(a, i, n) {

    let l = a.length
    ,   x = i < 0 ? l + i - n: i;
    
    if (x < 0 | x + n > l)
      return -1;
      
    return a.slice(x, x + n);
    
}