//CH4113NG3
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

//MY SOLUTION
function nerdy(string){
    let result = [];
    for(i = 0; i < string.length; i++){
        if(string[i].toLowerCase() == 'a'){
            result.push('4');
        }else if(string[i].toLowerCase() == 'e'){
            result.push('3');
        }else if(string[i] == 'l'){
            result.push('1');
        }else{
            result.push(string[i]);
        }
    }
    return result.join('');
}

//OTHER CLEVER SOLUTION
const nerdify = t => t.replace(/[aelAE]/g, a => ({'a': 4, 'e': 3, 'l':1 }[a.toLowerCase()]));