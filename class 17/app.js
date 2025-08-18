// let rightNow = new Date()
// let today = rightNow.getDay();
// let days = ["Sun","Mon","Tue","Wed","thu","fri","Sat"];
// let dayStr = days[today];
// console.log(dayStr);

// let rightNow = new Date()
// let today = rightNow.getMonth();
// let days = ["JUN","FEB","MAR","APR","MAY","JUNE","JUL","AUG","SEP","OCT","NOV","DEC"];
// let dayStr = days[today];
// console.log(dayStr);


// let rightNow = new Date()
// let today = rightNow.getFullYear();
// let currentHour = rightNow.getHours();
// let currentMin = rightNow.getMinutes();
// let currentSec = rightNow.getSeconds();
// let currentMiniSec = rightNow.getMilliseconds();
// console.log(currentHour + ":" + currentMin + ":" + currentSec + ":" + currentMiniSec);


let rightNow = new Date()
let today = rightNow.getFullYear();
let currentHour = rightNow.getHours();
let currentMin = rightNow.getMinutes();
let currentSec = rightNow.getSeconds();
let currentMiniSec = rightNow.getMilliseconds();
if (currentHour > 12) {
    currentHour-= 12
}
console.log(currentHour + ":" + currentMin + ":" + currentSec + ":" + currentMiniSec);


