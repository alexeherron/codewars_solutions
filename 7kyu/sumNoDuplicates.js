//SUM A LIST BUT IGNORE ANY DUPLICATES
// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

//MY SOLUTION
function sumIgnore(array){
    let clean = []
    let unique = []
    for(i = 0; i < array.length; i++){
        if(unique.includes(array[i])){
            clean.push(array[i]);
        }else{
            unique.push(array[i]);
        }
    }
    let result = unique.map((x) => clean.includes(x)? 0 : x);
    return result.reduce((acc, item) => acc + item, 0);
}

//OTHER CLEVER SOLUTION
function sumNoDuplicates(numList) {
    const uniqueArr=numList.filter((num,index)=>numList.indexOf(num)===index&&numList.lastIndexOf(num)===index)
    return uniqueArr.reduce((x,y)=>x+y,0);
}