//INSERT DASHES
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//MY SOLUTION
function insertDash(num){
    let numArray = String(num).split('');
    numArray = numArray.map((x,i) => ((+x%2!= 0)&&(+(numArray[i-1])%2!=0)&&(+(numArray[i]) != null)) ? x = `-${x}` : x = x).join('');
    return (numArray[0] == '-') ? numArray.substring(1) : numArray;
}

//OTHER CLEVER SOLUTION
function insertDash(num) {
    return num.toString().split('').reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
        acc = acc + '-';
      
      return acc + c;
    }, '');
}