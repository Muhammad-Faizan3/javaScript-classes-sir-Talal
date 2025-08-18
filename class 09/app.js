// let user = prompt("Enter a number");
// let end = prompt("Enter a number");
// let skip = prompt("Enter a number")
// for( i = user; i <= end; i=i + skip) {
//     console.log(i);
    
// }

// let furits = ["Apple", "Banana","Mango"];
// for (let i = 0; i< furits.length; i++) {
//     console.log(furits[i]);
    
// }

// for(i = 10; i>= 0; i--) {
//     console.log(i);
    
// }
// let num = [1,2,3,4,5,6,7,8,9,10];
// let count = 0;
// let oddCount = 0;

// for(let i = 0; i < num.length; i++) {
//     if(num[i] % 2 === 0) {
//         count++;
//     }   
//     else{
//         oddCount++;
//     } 
// }
// console.log("Even Number in the array are: " + count);
// console.log("Even Number in the array are: " + oddCount);

// let num = [1,2,3,4,5,6,7,8,9,10]
// let total = 0;
// for(let i = 0; i < num.length; i++) {
//     total = total + num[i];

    
// }
// console.log(total);

let clean = ["karachi" , "Lahore" , "Islamabad" , "Peshawar"];
let city = +prompt("Enter your city?");

if( clean.indexOf(city) >= 0) {
    console.log("you live in a clean city");
}
else{
    console.log("you do not live in a clean city");
    
}

