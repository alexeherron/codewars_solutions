//HOLIDAY III - FIRE ON THE BOAT
// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

//MY SOLUTION
const boatFire = str => str.replaceAll('Fire', '~~');

//OTHER CLEVER SOLUTION
const fireFight = s =>
  s.replace(/Fire/g, `~~`);