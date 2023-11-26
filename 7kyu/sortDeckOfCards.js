// SORT DECK OF CARDS
// Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, no matter the starting collection.

// All cards in the list are represented as strings, so that sorted list of cards looks like this:

// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

// Example:

// >>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

// Hint: Tests will have many occurrences of same rank cards, as well as vary in length. You can assume though, that input list is always going to have at least 1 element.

// MY SOLUTION
function sortCards(arr){
    let royal = {'A' : 1, 'T' : 10, 'J' : 11, 'Q' : 12, 'K' : 13};
    const flip = arr => arr.map(x => Number(x) || royal[x]);
    const unflip = arr => arr.map(x => (Object.keys(royal).find(key => royal[key] === x)) || (x));
    return unflip(flip(arr).sort((a,b) => a-b));
}

// OTHER CLEVER SOLUTION
function sortCards(array){
	var ideal = "A23456789TJQK";
	return array.sort(function(a,b) {
	  return ideal.indexOf(a) - ideal.indexOf(b);
  } );
}