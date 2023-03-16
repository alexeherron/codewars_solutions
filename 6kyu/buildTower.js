//BUILD TOWER
// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//MY SOLUTION
function buildTower(floors){
    let tower = [];
    for(i = 0; i < floors; i++){
        let center = "*";
        let side = "";
        for(j = 0; j < i; j++){
            center = center + "**";
        }
        for(k = 0; k < (floors-(i+1)); k++){
            side = side + " ";
        }
        let level = side + center + side;
        tower.push(level);
    }
    return tower;
}

//OTHER CLEVER SOLUTION
function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
}