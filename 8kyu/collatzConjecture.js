//COLLATZ CONJECTURE
// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1

// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

//MY SOLUTION
function hotpo(n){
    for(i = 0; i < Infinity; i++){
        if(n === 1){
            return i;
        }else if(n % 2 === 0){
            n = n/2;
        }else{
            n = 3*n +1;
        }
    }
}

//OTHER CLEVER SOLUTION
    let steps = 0;
    while(n != 1)
    {
        if(n%2===0){
            n=n/2;
        }else{
            n=3*n+1;
        }
        steps++;
    }
    return steps;
