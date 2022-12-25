//PYTHAGOREAN TRIPLE
//Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2

//MY SOLUTION
function pythagTrip(array){
    let sorted = array.sort((a,b) => a-b);
    return (sorted[0]**2 + sorted[1]**2 === sorted[2]**2) ? true : false;
}

//OTHER CLEVER SOLUTION
function isPythagoreanTriple(integers) {
    let massiv = integers.sort((a, b) => a - b)
    return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
  }