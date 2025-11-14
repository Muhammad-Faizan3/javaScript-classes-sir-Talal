// let emailE1 = document.getElementById("email");
// let passwordE1 = document.getElementById("password");
// let message = document.getElementById("message")
// let userNameEl = document.getElementById("user-name");
// let fb = firebase.auth();
// const db = firebase.firestore();

// function register() {
//     localStorage.setItem("displayName",userNameEl.value);
//     fb.createUserWithEmailAndPassword(emailE1.value, passwordE1.value)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             user.displayName = userNameEl.value;
//             message.innerHTML = "User create Successfully";
//             message.style.color = "red";
//             redirectTodo()

//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             message.innerHTML = errorCode + " " + errorMessage;
//             message.style.color = "red";

//         });
// }
// function signIn() {
//     localStorage.setItem("displayName",userNameEl.value);
//     fb.signInWithEmailAndPassword(emailE1.value, passwordE1.value)
//         .then((userCredential) => {
//             // Signed in
//             var user = userCredential.user;
//             user.displayName = userNameEl.value;
//             message.innerHTML = "Signed in Successfully";
//             message.style.color = "green";
//             redirectTodo()
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             message.innerHTML = errorCode + " " + errorMessage;
//             message.style.color = "red";

//         });
// }
// function signOut() {
//     localStorage.removeItem("displayName");

//     fb.signOut().then(() => {
//         redirectSignUp()
//     }).catch((error) => {
//         console.error(error);

//     });
// }

// function redirectTodo() {
//     window.location.href = "./home.html";
// }
// function redirectSignUp() {
//     window.location.href = "./index.html";
// }
// function initial() {
//     userNamePlaceEl.innerHTML = localStorage.getItem("displayName");
// }
// let todosEl = document.getElementById("todos");
// let userNamePlaceEl = document.getElementById("user-nameplace");


// function getTodos() {
//   let user = JSON.parse(localStorage.getItem("uid"));
//   db.collection("todos").where("uid", "==", user.uid)
//     .onSnapshot((snapshot) => {
//         snapshot.docChanges().forEach((change) => {
//             if (change.type === "added") {
//                 // console.log("New city: ", change.doc.data(), change.doc.id);
//                 TodosDataDOM(change.doc)
//             }
//             // if (change.type === "modified") {
//             //     console.log("Modified city: ", change.doc.data());
//             // }
//             // if (change.type === "removed") {
//             //     console.log("Removed city: ", change.doc.data());
//             // }
//         });
//     });
// }

// let divListing = document.getElementById("listing");

// function TodosDataDOM (todoItem) {
//     let todoObject = todoItem.data();
//     todoObject.id = todoItem.id
//     let p = document.createElement("p");
//     let pTextNode = document.createTextNode(todoObject.todo);

//     let editButton = document.createElement("button");
//     let editButtonText = document.createTextNode("Edit");
//     editButton.appendChild(editButtonText);

//     let deleteButton = document.createElement("button");
//     let deleteButtonText = document.createTextNode("Delete");
//     deleteButton.appendChild(deleteButtonText);

    
//     p.appendChild(pTextNode);
//     p.appendChild(editButton);
//     p.appendChild(deleteButton);
//     divListing.appendChild(p);
// }

let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let userNameEl = document.getElementById("user-name");
let message = document.getElementById("message");
let auth = firebase.auth();
const db = firebase.firestore();

function signUp() {
  auth.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      //   console.log(user);
      localStorage.setItem("displayName", userNameEl.value);
      message.innerHTML = "User Created Successfully";
      message.style.color = "green";
      redirectToTodo();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function signIn() {
  auth.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      //   console.log(user.uid);
      localStorage.setItem("displayName", userNameEl.value);
      message.innerHTML = "Signed in Successfully";
      message.style.color = "green";
      redirectToTodo();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function signOut() {
  localStorage.removeItem("displayName");
  auth.signOut()
    .then(() => {
      // Sign-out successful.
      window.location.href = "./index.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

function redirectToTodo() {
  localStorage.setItem("uid", JSON.stringify(auth.currentUser));
  window.location.href = "./home.html";
}

// Firbase Firestore
let todosEl = document.getElementById("todos");
let userNamePlaceEl = document.getElementById("user-nameplace");

function initalLoad() {
  userNamePlaceEl.innerHTML = localStorage.getItem("displayName");
}

function addTodo() {
  db.collection("todos")
    .add({
      todo: todosEl.value,
      uid: auth.currentUser.uid, // fb = firebase.auth().currentUser.uid
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function getTodos() {
  let user = JSON.parse(localStorage.getItem("uid"));
  db.collection("todos").where("uid", "==", user.uid)
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                // console.log("New city: ", change.doc.data(), change.doc.id);
                TodosDataDOM(change.doc)
            }
            // if (change.type === "modified") {
            //     console.log("Modified city: ", change.doc.data());
            // }
            // if (change.type === "removed") {
            //     console.log("Removed city: ", change.doc.data());
            // }
        });
    });
}

let divListing = document.getElementById("listing");

function TodosDataDOM (todoItem) {
    let todoObject = todoItem.data();
    todoObject.id = todoItem.id
    let p = document.createElement("p");
    let pTextNode = document.createTextNode(todoObject.todo);

    let editButton = document.createElement("button");
    let editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);

    let deleteButton = document.createElement("button");
    let deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText);

    
    p.appendChild(pTextNode);
    p.appendChild(editButton);
    p.appendChild(deleteButton);
    divListing.appendChild(p);
}

