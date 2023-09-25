//THE DEAF RATS OF HAMLIN
// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
// But some of the rats are deaf and are going the wrong way!
// Kata Task
// How many deaf rats are there?
// Legend
//     P = The Pied Piper
//     O~ = Rat going left
//     ~O = Rat going right
// Example
//     ex1 ~O~O~O~O P has 0 deaf rats
//     ex2 P O~ O~ ~O O~ has 1 deaf rat
//     ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

//MY SOLUTION
function deafRats(str){
    // Split the string into rats coming from the left and rats coming from the right.
    const leftAndRight = str => str.replaceAll(' ', '').split('P');

    // Turn each string into an array of two-character strings (rats).
    const ratParser = str => str.split('').map((x,i) => (i % 2 == 0) ? `*${x}` : x).join('').split('*');

    // Count each rat going left from the first (coming from the left) string and going right from the second string. AKA count all of the rats going the wrong way.
    const deafRatCounter = (arr, wrongRat) => arr.filter(x => x == wrongRat).length;

    // Put it all together and reduce.
    return leftAndRight(str).map(x => ratParser(x)).map((x,i) => (i == 0) ? deafRatCounter(x, 'O~') : deafRatCounter(x, '~O')).reduce((acc, item) => acc + item, 0);

    // console.log(leftAndRight(str));
    // let fromRight = str.replaceAll(' ', '').substring(str.indexOf('P') + 1).split('').map((x,i) => (i % 2 == 0) ? `*${x}` : x).join('').split('*').filter(x => x == '~O').length;
    // let fromLeft = str.replaceAll(' ', '').substring(0, str.indexOf('P')).split('').map((x,i) => (i % 2 == 0) ? `*${x}` : x).join('').split('*').filter(x => x == 'O~').length;
    // return (fromLeft + fromRight);
}

//OTHER CLEVER SOLUTION
var countDeafRats = function(town) {
    let deafs = 0
    let ident = 'O'
    for ( let i = 0; i < town.length; i++){
       if ( town[i] === 'P' ){
        ident =  '~'
       }
       if (town[i] === ident){
         deafs++
       }
       if (town[i] === '~' || town[i] === 'O'){
        i++
       }
     }
    return deafs;
}