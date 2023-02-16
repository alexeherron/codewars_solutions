//SIMPLE STRING CHARACTERS
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.
// Good luck!

//MY SOLUTION
function simpleString(str){
    let upper = []
    let lower = []
    let num = []
    let special = []
    for(i = 0; i < str.length; i++){
        console.log(str[i])
        if(/[A-Z\s]+/g.test(str[i])){
            upper.push(str[i])
        }else if(/[a-z\s]+/g.test(str[i])){
            lower.push(str[i])
        }else if(/[0-9\s]/g.test(str[i])){
            num.push(str[i])
        }else{
            special.push(str[i])
        }
    }
    return [upper.length, lower.length, num.length, special.length]
}

//OTHER CLEVER SOLUTION
const solve = x => {
    let u = x.match(/[A-Z]/g)||[]
    let d = x.match(/[a-z]/g)||[]
    let n = x.match(/[0-9]/g)||[]
    let s = x.match(/[^A-Z0-9]/gi)||[]
    return [u.length, d.length, n.length, s.length]
}