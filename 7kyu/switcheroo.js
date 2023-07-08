//SWITCHEROO
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//MY SOLUTION
function switcheroo(str){
    let strList = str.split('');
    for( i = 0 ; i < strList.length; i++){
        if(strList[i] == 'a'){
            strList[i] = 'b';
        }else if(strList[i] == 'b'){
            strList[i] = 'a';
        }
    }
    return strList.join('');
}

//OTHER CLEVER SOLUTION
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")