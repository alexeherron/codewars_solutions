// ALL INCLUSIVE
// Input:
//     a string strng
//     an array of strings arr

// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//     a boolean true if all rotations of strng are included in arr
//     false otherwise

// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

// Note:
// Though not correct in a mathematical sense

//     we will consider that there are no rotations of strng == ""
//     and for any array arr: contain_all_rots("", arr) --> true

// MY SOLUTION
function containAllRots(str, arr){
    let result = 0;
    for(i = 0; i < str.length; i++){
        if(arr.indexOf(`${str.substring(i)}${str.substring(0,i)}`) < 0){
            result += 1;
        }
    }
    return (result == 0);
}

// OTHER CLEVER SOLUTION
function containAllRots(strng, arr) {
    return [...strng].map((_,i) => strng.substr(i)+strng.slice(0,i)).every(x => arr.includes(x));
}