//UNIQUE IN ORDER
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//MY SOLUTION
function uniqueInOrder(str){
    let strArray = [];
    if(typeof(str) == "string"){
        let strObject = str.split('');
        for(i = 0; i < str.length; i++){
            strArray.push(strObject[i]);
        }
    }else{
        strArray = str;
    }
    for(i = 0; i < strArray.length; i++){
        if(strArray[i] == strArray[i - 1]){
            strArray.splice(i-1, 1);
        }
    }
    for(i = 0; i < strArray.length; i++){
        if(strArray[i] == strArray[i - 1]){
            strArray.splice(i-1, 1);
        }
    }
    return strArray;
}

//OTHER CLEVER SOLUTION
function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
}