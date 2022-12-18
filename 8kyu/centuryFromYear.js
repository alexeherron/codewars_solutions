//CENTURY FROM YEAR
// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.

//MY SOLUTION
const century = year => year % 100 === 0 ? Math.floor(year/100) : Math.floor((year/100) + 1);

//OTHER CLEVER SOLUTION
const century1 = year => Math.ceil(year/100)