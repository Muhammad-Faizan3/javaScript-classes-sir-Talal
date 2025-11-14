//  function placeOrder() {
//       let price = document.getElementById("food-list");
//       let qty = document.getElementById("qty").value;
//       let bill = document.getElementById("bill");

//       let total = 0;

//       if (price.value === "pizza") {
//         total = 1500 * qty;
//       } else if (price.value === "burger") {
//         total = 1000 * qty;
//       } else if (price.value === "pasta") {
//         total = 800 * qty;
//       }

//       bill.innerHTML = "Total: Rs " + total;
//     }

/*
    1. check balance
    2. cash withdrwal
    3. cash deposit
    4. cancel
*/

let balance = 1000;

function inputCard() {
  for (; ;) {
    let userInput = prompt("Enter your:    1. check balance 2. cash withdrwal 3. cash deposit 4. cancel");

    if (userInput === "1" || userInput === "check balance") {
      alert("your current balance is: " + balance);
    }
    else if (userInput === "2") {
      let userAmount = +prompt("Enter your amount?");
      if (userAmount > balance) {
        alert("insuficient balance.");
      } else {
        alert("here is the money: " + userAmount + "your remaining balance is: " + (balance - userAmount));
        break;
      }
    }
    else if (userInput === "3") {
      let userAmount = +prompt("Enter your deposit amount?")
      alert("your current amount is: " + (balance + userAmount))
    }
    else if (userInput === "4") {
      break;
    }
    else {
      alert("Invalid option? blocking...");
    }

  }
}