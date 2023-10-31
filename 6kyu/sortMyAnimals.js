// SORT MY ANIMALS
// Consider the following class:

// var Animal = { 
//     name: "Cat", 
//     numberOfLegs: 4 
// }

// Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

// If an empty list is passed in, it should return an empty list back.

// MY SOLUTION
function sortAnimal(animals) {
    let animalObj = {};
    for(i = 0; i < animals.length; i++){
      if(!animalObj[animals[i].numberOfLegs]){
        animalObj[animals[i].numberOfLegs] = [animals[i]];
      }else{
        animalObj[animals[i].numberOfLegs].push(animals[i])
      }
    }
    let result = [];
    for(i = 0; i < Object.keys(animalObj).length; i++){
      let arr = animalObj[Object.keys(animalObj)[i]].sort((a,b) => a.name.toLowerCase() - b.name.toLowerCase());
      arr.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      result.push(arr);
    }
    return result.flat()
}

// OTHER CLEVER SOLUTION
const sortAnimal = animals =>
  [...animals].sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name));