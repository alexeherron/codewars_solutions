//FIND THE CAPITALS
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//MY SOLUTION
function capitals(str){
    let result = [];
    str.split('').forEach((el,i) => {
        if(el == el.toUpperCase()){
            result.push(i);
        }
    });
    return result;
}

//OTHER CLEVER SOLUTION
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};