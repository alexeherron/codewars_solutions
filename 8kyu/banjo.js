//ARE YOU PLAYING BANJO?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

//MY SOLUTION
function banjo(string){
    return (string.toLowerCase()[0] == 'r') ? `${string} plays banjo` : `${string} does not play banjo`;
}

//OTHER CLEVER SOLUTION
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}