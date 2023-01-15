//EVEN OR ODD
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//MY SOLUTION
const evenOdd = num => num % 2 === 0 ? 'Even' : 'Odd'

//OTHER CLEVER SOLUTION
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}