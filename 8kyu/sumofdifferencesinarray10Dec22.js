let testArray = [2, 1, 10];
function sumDiff(array){
    let dif = [];
    let descending = array.sort((a, b) => b - a);
    for(i = 0; i < array.length -1; i++){
        dif.push(descending[i] - descending[i + 1])
    }
    let sum = dif.reduce((acc, item) => acc + item, 0)
    if(array.length == 0 || array.length == 1){
        sum = 0;
    }
    return sum;
}
alert(sumDiff(testArray));