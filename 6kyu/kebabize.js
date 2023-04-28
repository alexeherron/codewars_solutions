//KEBABIZE
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

// Notes:

//     the returned string should only contain lowercase letters

//MY SOLUTION
function kebabize(string){
    let stringLet = string.replace(/[^a-zA-Z]+/g, '')
    stringLet = stringLet.split('').map(x => (x == x.toUpperCase()) ? `-${x.toLowerCase()}` : x).join('');
    return (stringLet[0] == '-') ? stringLet.substring(1) : stringLet;
}

//OTHER CLEVER SOLUTION
function kebabize(str) {

    return str.split('').filter(v => isNaN(parseInt(v))).map(v => (v.toUpperCase() === v) ? v.replace(v, '-' + v.toLowerCase()) : v.toLowerCase()).join('').replace(/^-/, '');
    
}