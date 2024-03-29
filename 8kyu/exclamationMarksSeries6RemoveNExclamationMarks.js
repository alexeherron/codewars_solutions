// EXCLAMATION MARKS SERIES #6: REMOVE N EXCLAMATION MARKS FROM SENTENCE
// Remove n exclamation marks in the sentence from left to right. n is positive integer.
// Examples

// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// MY SOLUTION
function remove(s,n){
    const once = str => str.replace('!', '');
    for(i = 0; i < n; i++){
      s = once(s);
    }
    return s;
}

// OTHER CLEVER SOLUTION
function remove(s,n){
    for (var i=0;i<n;i++) s=s.replace("!","");
    return s;
}