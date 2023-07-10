//POWER OF 4
// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// (In C# Integer means all integer Types like Int16,Int32,.....)
// Examples

// powerOf4(1024) // returns true
// powerOf4(44) // returns false
// powerOf4("not a positive integer") // returns false

//MY SOLUTION
function powerOf4(num){
    if((num < 1) || (num !== Number(num))){
        return false;
    }
    while(num > 1){
        num = num/4;
    }
    return num == 1;
}

//OTHER CLEVER SOLUTION
function powerOf4(n) {
    let [b,index]=[0,0]
    while (b<=n) {
    b=4**index
      if (b===n) {
        return true}
    index++}
    return false
}