//PERFECT SQUARE
// Task

// Write function which validates an input string. If the string is a perfect square return true,false otherwise.
// What is perfect square?
// * We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
// * Perfect squares must have same width and height -> cpt.Obvious
// * Squares of random sizes will be tested!
// Function input:

// perfectSquare = "...\n...\n...";    

// // This represents the following Perfect Square:

// `...
//  ...
//  ...`
                               
// notPerfect = "..,\n..\n...";

// // This is not a Perfect Square:

// `..,
//  ..
//  ...`

//MY SOLUTION
function perfectSquare(string){
    if(string.includes(',')){
      return false;
    }
    let levels = string.split('\n');

    if(levels[0].length == levels.length && levels.every((val,i,arr) => val === arr[0])){
        return true;
    }else{
        return false;
    }
}

//OTHER CLEVER SOLUTION
function perfectSquare(s){
    var arr = s.split("\n");
    var len = arr[0].length;
    if (arr.length != len)
      return false;
    for (var i = 0; i < arr.length; i++){
      if(arr[i].length != len)
        return false;
      for(var j = 0; j < arr[i].length; j++){
        if (arr[i].charAt(j) != '.')
          return false;
      }
    }
    return true;
}