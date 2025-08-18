// let cityName = ["karachi","Lahore","Islamabad","Quetta","Sukkur"];
// let userCity = prompt("Enter your city name:");
// let index = cityName.indexOf(userCity);
// if(index != -1){
//     console.log("Your city is in the list");
//     }else{
//         console.log("Your city is not in the list");
//         }

// let text = "
// // let words = text.split("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero incidunt doloremque officiis saepe itaque, iure, ipsam minima corrupti nobis facilis ad repudiandae accusantium illum reprehenderit beatae? Quam ipsum quidem tempore!");
// // let word = words[0];
// // let count = 0;
// // for (let i = 0; i < text.length; i++) {
// //     if (text[i] === word[count]) {
// //         count++;
// //         } else {
// //             count = 0;
// //             }

function toTitleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
// let myText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero incidunt doloremque officiis saepe itaque, iure, ipsam minima corrupti nobis facilis ad repudiandae accusantium illum reprehenderit beatae? Quam ipsum quidem tempore!";
// let titleCaseText = toTitleCase(myText);

// console.log(titleCaseText);

// let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero incidunt doloremque officiis saepe itaque, iure, ipsam minima corrupti nobis facilis ad repudiandae accusantium illum reprehenderit beatae? Quam ipsum quidem tempore!";
// text = text.toLowerCase();
// console.log(text);

// let makeUpper = true;
// let result = "";
// for(let i = 0; i < text.length; i++) {
//     let char = text[i];
//     if (makeUpper && char >= 'a' && char <= 'z') {
//         result = result + char.toUpperCase();
//         makeUpper = false;
//     }
//     else {result = result + char;
//     }
//     if (char === ' ') {
//         makeUpper = true;
//     }

    
// }
// console.log(result);
let count = +prompt("Enter a number")
let num = +prompt("Enter a number");
for(let i = 1; i <= count; i++) {
    console.log(num + " X " + i + " = " + i * num);
}


