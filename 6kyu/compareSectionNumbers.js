// COMPARE SECTION NUMBERS
// Section numbers are strings of dot-separated integers. The highest level sections (chapters) are numbered 1, 2, 3, etc. Second level sections are numbered 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, etc. Next level sections are numbered 1.1.1, 1.1.2, 1.1.2, 1.2.1, 1.2.2, erc. There is no bound on the number of sections a document may have, nor is there any bound on the number of levels.

// A section of a certain level may appear directly inside a section several levels higher without the levels between. For example, section 1.0.1 may appear directly under section 1, without there being any level 2 section. Section 1.1 comes after section 1.0.1. Sections with trailing ".0" are considered to be the same as the section with the trailing ".0" truncated. Thus, section 1.0 is the same as section 1, and section 1.2.0.0 is the same as section 1.2.

// Write a function cmp(section1, section2) that returns -1, 0, or 1 depending on whether section1 is before, same as, or after section2 respectively.

// MY SOLUTION
function sectionNumbers(s1, s2){
    // First we'll turn each section number into an array of numbers.
    const makeNumArr = str => str.split('.').map(x => Number(x));
    let numArrs = [s1, s2].map(x => makeNumArr(x));
    // Then let's loop through both and compare them.
    let maxLength = Math.max(numArrs[0].length, numArrs[1].length);
    for(i = 0; i < maxLength; i++){
        if(numArrs[0][i] > (numArrs[1][i] || 0)){
            return 1;
        }else if((numArrs[0][i] || 0) < numArrs[1][i]){
            return -1;
        }
    }
    return 0;
}

// OTHER CLEVER SOLUTION
function cmp(str1, str2) {
    const [ver1, ver2] = [str1, str2].map(str => str.split`.`);
    
    for (let i = 0; i < Math.max(ver1.length, ver2.length); i++) {
      const [n1, n2] = [ver1[i], ver2[i]].map(n => Number(n) || 0);
  
      if (n1 === n2) continue;
      return n1 > n2 ? 1 : -1;
    }
    
    return 0;
}