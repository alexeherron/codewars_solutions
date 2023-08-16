//WHAT TIME IS IT
// Given a time in AM/PM format as a string, convert it to 24-hour military time time as a string.

// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

// Try not to use built-in Date/Time libraries.
// Examples

// "07:05:45PM"  -->  "19:05:45"
// "12:00:01AM"  -->  "00:00:01"
// "11:46:47PM"  -->  "23:46:47"

//MY SOLUTION
function whatTime(str){
    let hr = Number(str.slice(0,2));
    let minSec = str.slice(3,8);
    let meridian = str.slice(8);
    return (meridian == 'PM' && hr == 12) ? `${hr}:${minSec}` : (meridian == 'PM') ? `${('0' + String(hr + 12)).slice(-2)}:${minSec}` : (hr < 12) ? str.slice(0,8) : `${('0' + String(hr - 12)).slice(-2)}:${minSec}`;
}

//OTHER CLEVER SOLUTION
var getMilitaryTime = function(input) {

    var hour = (input.slice(-2) === 'AM' ? 0 : 12)
             + +input.slice(0, 2) % 12;
    
    var time = ('00' + hour).slice(-2) 
             + input.slice(2, -2)
    
    return time;
    
  };