//NEAREST SQUARE NUMBER
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

//MY SOLUTION
function nearestSq(n){
    if((Math.abs(Math.floor(Math.sqrt(n)) - Math.sqrt(n))) < (Math.abs(Math.ceil(Math.sqrt(n)) - Math.sqrt(n)))){
        return Math.floor(Math.sqrt(n))**2;
    }else{
        return Math.ceil(Math.sqrt(n))**2;
    }
}

//OTHER CLEVER SOLUTION
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);