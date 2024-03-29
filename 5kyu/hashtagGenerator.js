//HASHTAG GENERATOR
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//MY SOLUTION
function hashtagGenerator(string){
    if(string == ""){
        return false
    }
    let trimmed = string.trim().split(' ').filter((x) => x != '')
    trimmed = trimmed.map((x) => x[0].toUpperCase() + x.slice(1))
    if(trimmed == ''){
        return false
    }
    trimmed.unshift('#')
    if(trimmed.join('').length > 140){
        return false
    }
    return trimmed.join('');
}

//OTHER CLEVER SOLUTION
function generateHashtag (str) {
    if(!str || str.length < 1) return false;
    
    var r = '#' + str.split(' ').map(function(el) {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }).join('');
    return r.length > 140?false:r;
}