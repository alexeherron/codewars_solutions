//CLOCKY MCCLOCKFACE
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?
// Kata

// Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.
// Examples

//     12:00 = 0 degrees

//     03:00 = 90 degrees

//     06:00 = 180 degrees

//     09:00 = 270 degrees

//     12:00 = 360 degrees

// Notes

//     0 <= angle <= 360

//     Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.
//         3 o'clock is 03:00, not 15:00
//         7 minutes past midnight is 12:07
//         7 minutes past noon is also 12:07

//MY SOLUTION
function clocky(degrees){
    let hr = Math.floor(12*(degrees/360));
    let min = Math.floor(Math.abs(60*(hr - (12*(degrees/360)))));
    console.log(Math.abs(60*(hr - (12*(degrees/360)))))
    const format = d => (d < 10) ? '0' + d.toString() : d.toString();
    let noonish
    if(hr == 0){
      noonish = 12
    }
    return `${format(noonish || hr)}:${format(min)}`;
  }
  
  //OTHER CLEVER SOLUTION
  var whatTimeIsIt = function(angle) {
    let hour = Math.floor(angle/30), minutes = Math.floor((angle%30)*2);
    if (hour < 10){hour = "0"+ hour;}
    if (hour <= 0){hour = 12;}
    if (minutes < 10){minutes = "0" + minutes;}
      return hour + ":" + minutes;
  }