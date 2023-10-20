// BREAD SANDWICHES
// If you're not familiar with the fantastic culinary delights of the British Isles you may not know about the bread sandwich.

// The idea is very simple - if you have a slice of bread between two other slices of bread, then it's a bread sandwich. Additionally, if you have a bread sandwich between two other slices of bread, you get a bread sandwich sandwich, and so on.

// In this kata, we will define the following terms like so:

//     Sandwich - Two slices of bread which may or may not have a filling
//     Bread Sandwich - Two slices of bread which contains one slice of bread in the middle as a filling

// You will need to build two functions:

//     Given the number of slices of bread, return the phrase used to refer to the sandwich

//      2 - 'sandwich'
//      5 - 'bread sandwich sandwich'

//     The reverse function - given the name of the sandwich, return how many slices of bread there are in the sandwich

//     'bread sandwich' - 3
//     'sandwich sandwich' - 4

//     You should return None/null if there is no input / the input is invalid / there is no sandwich
//     Maximum 100 slices of bread

// MY SOLUTION
function slicesToName(n) {
    const isValidNum = num => (num === Number(num) && num > 1 && num % 1 == 0);
    return !(isValidNum(n)) ? null : (n % 2 == 0) ? new Array(n/2).fill('sandwich').join(' ') : 'bread' + ' sandwich'.repeat(Math.floor(n/2));
}
  
function nameToSlices(name) {
    const isValidName = s => (s === String(s) 
        && s.split(' ').filter(x => x == 'bread' || x == 'sandwich').length == s.split(' ').length
        && s.split(' ').filter(x => x == 'bread').length <= 1)
        && !(s.split(' ').slice(1).join('')).includes('bread')
        && s.includes('sandwich');
    return !(isValidName(name)) ? null : (name.split(' ')[0] == 'bread') ? (name.split(' ').length)*2 - 1 : (name.split(' ').length)*2;
}

// OTHER CLEVER SOLUTION
function slicesToName(n) {
    let result = [];
    if (+n != n || n < 2) return null;
    if (n % 2 === 1) {
      result.push('bread');
      n--;
    }
    if (n % 2 === 0) {
      for (let i = 0; i < n; i +=2){
        result.push('sandwich');
      }
      return result.join(' ');
    }
  }
  
  function nameToSlices(name) {
    if (!name || +name===name) return null;
    let result = 0;
    let arr = name.split(' ');
     if (arr[0] == 'bread') {
       result = 1;
       arr.shift()
       }
     for (let i = 0; i < arr.length; i++){
       if (arr[i] != 'sandwich') return null;
       result +=2;
     }
    if (result === 1) return null
    return result;
}