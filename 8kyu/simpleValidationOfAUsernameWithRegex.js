// SIMPLE VALIDATION OF A USERNAME WITH REGEX
// Write a simple regex to validate a username. Allowed characters are:

//     lowercase letters,
//     numbers,
//     underscore

// Length should be between 4 and 16 characters (both included).

// MY SOLUTION
function validateUsr(username) {
    const allowedChars = str => str.split('').every(x => (('abcdefghijklmnopqrstuvwxyz_0123456789'.includes(x))))
    const lengthCheck = str => ((str.length >= 4) && (str.length <= 16))
    return (allowedChars(username) && lengthCheck(username))
}

// OTHER CLEVER SOLUTION
function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
}