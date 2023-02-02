//SUPER DUPER EASY
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//MY SOLUTION
const easy = value => typeof value == "string" ? 'Error' : (value*50 + 6);

//OTHER CLEVER SOLUTION
function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
}