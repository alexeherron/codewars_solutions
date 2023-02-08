//INTEGER DEPTH
// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

// example:

// let see n=42

// Multiple         value         digits     comment
// 42*1              42            2,4 
// 42*2              84             8         4 existed
// 42*3              126           1,6        2 existed
// 42*4              168            -         all existed
// 42*5              210            0         2,1 existed
// 42*6              252            5         2 existed
// 42*7              294            9         2,4 existed
// 42*8              336            3         6 existed 
// 42*9              378            7         3,8 existed

// Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.

//MY SOLUTION
function intDepth(n){
    let digits = [0,1,2,3,4,5,6,7,8,9];
    let result = 0;
    let myDigits = [];
    for(i = 1; i < Infinity; i++){
        let temp = String(n*i).split('');
        temp.forEach(x => {
            if(!myDigits.includes(x)){
                myDigits.push(x)
            }
        })
        myDigits.sort()
        if(myDigits.join('') == digits.join('')){
            result = i;
        }
    }
    return result;
}

//OTHER CLEVER SOLUTIONS
function computeDepth(x, a = [0,1,2,3,4,5,6,7,8,9], n = 0, i = 1){
    return !a.length ? n : computeDepth(x, a.filter(v=>!(''+(x*i)).includes(v)), n+1, i+1);
}

//ANOTHER ONE
function computeDepth (x){
    var digits = [0,1,2,3,4,5,6,7,8,9];
    var depth  = 0;
    var multiple;
    
    while(digits.length) {
      multiple = (x * ++depth).toString();
      digits   = digits.filter(v => multiple.indexOf(v) === -1);
    }
    
    return depth;
}