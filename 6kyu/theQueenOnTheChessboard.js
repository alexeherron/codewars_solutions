//THE QUEEN ON THE CHESSBOARD
// The queen can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop. The queen captures by occupying the square on which an enemy piece sits. (wikipedia: https://en.wikipedia.org/wiki/Queen_(chess)).
// Task:

// Write a function availableMoves(position) which returns possibly moves of chess queen. Returned value should be an array with possible moves sorted alphabetically, exluded starting position.

// For example when input position is A1 return value should be:

// ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]

//      A   B   C   D   E   F   G   H
//    + - + - + - + - + - + - + - + - +
// 1  | Q | x | x | x | x | x | x | x |
//    + - + - + - + - + - + - + - + - +
// 2  | x | x |   |   |   |   |   |   |
//    + - + - + - + - + - + - + - + - +
// 3  | x |   | x |   |   |   |   |   |
//    + - + - + - + - + - + - + - + - +
// 4  | x |   |   | x |   |   |   |   |
//    + - + - + - + - + - + - + - + - +
// 5  | x |   |  1 |   | x |   |   |   |
//    + - + - + - + - + - + - + - + - +
// 6  | x |   |   |   |   | x |   |   |
//    + - + - + - + - + - + - + - + - +
// 7  | x |   |   |   |   |   | x |   |
//    + - + - + - + - + - + - + - + - +
// 8  | x |   |   |   |   |   |   | x |
//    + - + - + - + - + - + - + - + - +
   
// Q = queen
// x = available move

// Input:

//     input position can be any type (array, number, string and so on). If input position is not a string then return empty array.
//     valid input position is one letter from A to H with number from 1 to 8, for example A1, C8, B3. If input is invalid (for example A10 or H0) then return empty array.

//MY SOLUTION
function queen(input){
    if(input !== String(input) || input.length != 2){
        return [];
    }
    let letter = input.split('')[0];
    let number = input.split('')[1];
    let lat = 'ABCDEFGH';
    let long = '12345678';
    if(!lat.includes(letter) || !long.includes(number)){
        return [];
    }
    let latMoves = lat.split('').map(x => `${x}${number}`);
    let longMoves = long.split('').map(x => `${letter}${x}`);
    let diag1 = lat.split('').map(x => `${x}${Number(number) + (lat.indexOf(x) - lat.indexOf(letter))}`).filter(x => x.length == 2 && !x.includes('9') && !x.includes('0'));
    let diag2 = lat.split('').map(x => `${x}${Number(number) - (lat.indexOf(x) - lat.indexOf(letter))}`).filter(x => x.length == 2 && !x.includes('9') && !x.includes('0'));
    return Array.from(new Set(latMoves.concat(longMoves, diag1, diag2).sort().filter(x => x != input)));
}

//OTHER CLEVER SOLUTION
const BOARD = [..."ABCDEFGH"].map(file => [..."12345678"].map(rank => file + rank));
const Q_DIRS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

function availableMoves(position) {
  if (!(/^[A-H][1-8]$/).test(position)) return [];
  const res = [],
    r = position[0].charCodeAt() - 65,
    c = position[1] - 1;
  for (const [dx, dy] of Q_DIRS)
    for (let x = r + dx, y = c + dy; BOARD[x] && BOARD[x][y]; x += dx, y += dy)
      res.push(BOARD[x][y]);
  return res.sort();
}