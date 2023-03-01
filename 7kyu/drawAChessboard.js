//DRAW A CHESSBOARD
// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

// Making a digital chessboard I think is an interesting way of visualising how loops can work together.

// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

// So chessBoard(6,4) should return an array like this:

// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]

// And chessBoard(3,7) should return this:

// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]

// The white spaces should be represented by an: 'O'

// and the black an: 'X'

// The first row should always start with a white space 'O'

//MY SOLUTION
function chessBoard(r,c){
    let board = [];
    for(i = 0; i < r; i++){
        let row = [];
        (i % 2 == 0) ? row.push("O") : row.push("X")
        for(j = 1; j < c; j++){
            (row[j-1] == "O") ? row[j] = "X" : row[j] = "O";
        }
        board.push(row);
    }
    return board;
}

//OTHER CLEVER SOLUTION
function chessBoard(rows, columns) {
    return Array.from({length: rows}, (_,i) => Array.from({length: columns}, (_,j) => 'OX'[(i+j)%2]));
}