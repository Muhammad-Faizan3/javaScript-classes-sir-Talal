// function signUo (email,password,callBack,secondCallBack) {
//     setTimeout(function () {
//         if (email === "fb240951@gmail.com" && password === "123456") {
//             callBack(secondCallBack);
//         }
//     },3000)
// }
// // signUo("fb240951@gmail.com", "123456",redirectToTimeLine)
// // function redirectToTimeLine () {
// //     // window.location.href = "https://www.google.com";
// //     console.log("redirected to timeline");
// // }

// signUo("fb240952@gmail.com","123456",
//     function redirectToTimeLine (cb) {
//         console.log(cb());     
//     },function textFactory () {
//         return "redirected to timeline";
//     });

// let firstAsync = new Promise(function(resolve,reject) {
//     setTimeout(function () {
//         let rondom = Math.ceil(Math.random() * 100);
//         if (rondom % 2 === 0) {
//             console.log(rondom);            
//         }
//         else{
//             console.log("This is an odd number");
//            } 
//         resolve();
//     })
// });
let firstAsync = new Promise(function(resolve,reject) {
    setTimeout(function () {
        let rondom = Math.ceil(Math.random() * 100);
        if (rondom % 2 === 0) {
            console.log(rondom);            
        }
        else{
            console.log("This is an odd number");
           } 
        resolve();
    })
});
firstAsync
     .then(function(success) {
        console.log(success);        
     })
     .catch(function (error) {
        console.error(error);
        
     })