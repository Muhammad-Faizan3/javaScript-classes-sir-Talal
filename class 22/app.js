// let h1El = document.childNodes[1].childNodes[2].childNodes[1].childNodes[0];
// console.log(h1El.nodeName);
// console.log(h1El.nodeType);// 1 aur 3
// console.log(h1El.nodeValue = ".");


// let h1El = document.childNodes[1].childNodes[2].childNodes[3].childNodes;
// let pCounter = 0;

// for (let i = 0; i < h1El.length; i++) {
//     if (h1El[i].nodeType === 1) {
//         pCounter++
//     }
//     if (pCounter === 2) {
//         h1El[i].innerHTML = "This is a para from js" + i;
//     }
// }

// console.log(h1El);



// let h1El = document.getElementById("special");
// console.log(h1El.innerHTML = "<p>This is from js</p>");

// let bodyEl = document.childNodes[1].childNodes[2];
// let pEl = document.createElement("p");
// let pText = document.createTextNode("This is from js")
// pEl.appendChild(pText)
// bodyEl.appendChild(pEl);




/*
create an h1 that has the text Shopping Cart
then create an input and a button with the text Add
then create a ul
after that check if user has left the input empty at the time of triggering the event 
and else create a li and then show it in the ul
*/

// let userText = document.getElementById("user-text");
// let message = document.getElementById("message");
// let ul = document.getElementById("list");
// let editingLi = null; 

// function add () {
//     if (userText.value.trim() === "") {
//         message.innerHTML = "Empty input";
//     } else {
//         message.innerHTML = "";

//         if (editingLi) {
//             // agar edit mode on hai
//             editingLi.firstChild.nodeValue = userText.value;
//             editingLi = null;
//         } else {
//             let li = document.createElement("li");
//             li.textContent = userText.value;

//             // Edit button
//             let editBtn = document.createElement("button");
//             editBtn.style.marginLeft = "10px";
//             editBtn.textContent = "Edit";
//             editBtn.onclick = function () {
//                 userText.value = li.firstChild.nodeValue;
//                 editingLi = li;
//             };
//             li.appendChild(editBtn);

//             let delBtn = document.createElement("button");
//             delBtn.style.marginLeft = "10px";
//             delBtn.textContent = "Delete";
//             delBtn.onclick = function () {
//                 ul.removeChild(li);
//             };
//             li.appendChild(delBtn);

//             ul.appendChild(li);  
//         }
//     }
//     userText.value = "";
// }

let userInput = document.getElementById("user-input");
let message = document.getElementById("message");
let ulEl = document.getElementById("list");

let mainButton = document.getElementById("main-btn");
let editingLi = null; // track edit mode

function addOrSave () {
    if (userInput.value === "") {
        message.innerHTML = "input field empty!";
        message.style.color = "red";
    } else {
        if (mainButton.textContent === "Add") {
            // Normal Add
            let li = document.createElement("li");
            let userTextNode = document.createTextNode(userInput.value);

            // Delete button
            let deleteButton = document.createElement("button");
            let deleteButtonTextNode = document.createTextNode("Delete");
            deleteButton.setAttribute("onClick", "removeItem(this)");
            deleteButton.appendChild(deleteButtonTextNode);

            // Edit button
            let editButton = document.createElement("button");
            let editButtonTextNode = document.createTextNode("Edit");
            editButton.setAttribute("onClick", "editItem(this)");
            editButton.appendChild(editButtonTextNode);

            li.appendChild(userTextNode);
            li.appendChild(deleteButton);
            li.appendChild(editButton);
            ulEl.appendChild(li);

            userInput.value = "";
        } else {
            // Save (update existing li)
            editingLi.firstChild.nodeValue = userInput.value;
            mainButton.textContent = "Add"; // back to Add mode
            editingLi = null;
            userInput.value = "";
        }
    }
}

function removeItem (targetEl) {
    let li = targetEl.parentNode;
    let ul = targetEl.parentNode.parentNode;
    ul.removeChild(li);
}

function editItem (targetEl) {
    editingLi = targetEl.parentNode;
    userInput.value = editingLi.firstChild.nodeValue;
    mainButton.textContent = "Save"; // change button to Save
}
