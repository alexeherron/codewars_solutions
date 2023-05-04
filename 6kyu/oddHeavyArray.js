//ODD-HEAVY ARRAY
// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.
// Array [11,4,9,2,8] is odd-heavy,
// because its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy,
// because one of its even elements (10 from [4,2,10]) is greater than two of
// its odd elements (9 and 3 from [11,9,3])

// Array [] is not odd-heavy,
// because it does not contain any odd numbers

// Array [3] is odd-heavy,
// because it does not contain any even numbers.

// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

//MY SOLUTION
function isOddHeavy(arr){
    let minOdd = Math.min(...arr.filter(x => x % 2 != 0));
    let maxEven = Math.max(...arr.filter(x => x % 2 == 0));
    if((arr.filter(x => x % 2 == 0)).length == 0 && (arr.filter(x => x % 2 != 0)).length > 0){
        return true;
    }
    return (arr.filter(x => x % 2 != 0).length > 0) && (minOdd > maxEven);
}

//OTHER CLEVER SOLUTION
function isOddHeavy(n){
    let odds = [];
    let evens = [];
    n.forEach(num=>num%2===0? evens.push(num) : odds.push(num));
    if(odds.length>0){
      return Math.min(...odds)>=Math.max(...evens)
    }return false
}