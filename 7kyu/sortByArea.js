//SORT RECTANGLES AND CIRCLES BY AREA II
// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.
// For example,
// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
// This kata inspired by Sort rectangles and circles by area.

//MY SOLUTION
function shapeSort(array){
    let areas = [];
    for(i = 0; i < array.length; i++){
        if(array[i].length == 2){
            let miniArr = [(array[i][0] * array[i][1]), array[i]]
            areas.push(miniArr);
        }else{
            let miniArr = [(Math.PI*Math.pow(array[i],2)), array[i]]
            areas.push(miniArr)
        }
    }
    areas.sort((a,b) => a[0]-b[0])
    areas = areas.map(x => x[1])
    return areas;
}

//OTHER CLEVER SOLUTION
const sortByArea = a => {
    const getArea = i => Array.isArray(i) ? i[0] * i[1] : Math.PI * i * i;
    return [...a].sort((i, j) => getArea(i) - getArea(j));
}