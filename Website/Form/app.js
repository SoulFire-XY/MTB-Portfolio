//
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//
////Login-Register Switch Logic
//const wrapper = document.querySelector('.wrapper');
//const loginLink = document.querySelector('.login-link');
//const registerLink = document.querySelector('.register-link');
//const btnPopup = document.querySelector('.btnLogin-popup');
//const iconClose = document.querySelector('.icon-close');
//
//registerLink.addEventListener('click', () => {
//  wrapper.classList.add('active');
//});
//
//loginLink.addEventListener('click', () => {
//  wrapper.classList.remove('active');
//});
//
//const firebaseConfig = {
//  apiKey: "AIzaSyCiD0AO-3eIZcnqzmnfrQBUwTpIvTjGf1M",
//  authDomain: "portfolio-50e40.firebaseapp.com",
//  databaseURL: "https://portfolio-50e40-default-rtdb.asia-southeast1.firebasedatabase.app",
//  projectId: "portfolio-50e40",
//  storageBucket: "portfolio-50e40.appspot.com",
//  messagingSenderId: "816498543374",
//  appId: "1:816498543374:web:75f5c1caa2659d8cbba55f",
//  measurementId: "G-617EDN0JYR"
//};
//firebase.initializeApp(firebaseConfig);
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//
//const dataForm = document.getElementById("dataForm");
//
//dataForm.addEventListener("submit", (event) => {
//  event.preventDefault();
//
//  // Get form input values
//  const name = document.getElementById("name").value;
//  const email = document.getElementById("email").value;
//
//  // Reference to the Firebase Realtime Database (or Firestore)
//  const databaseRef = firebase.database().ref("users");
//
//  // Push the data to the database (creates a new unique key for each entry)
//  databaseRef.push({
//    name: name,
//    email: email,
//  })
//  .then(() => {
//    console.log("Data saved successfully!");
//    // Clear form after successful submission
//    dataForm.reset();
//  })
//  .catch((error) => {
//    console.error("Error saving data:", error);
//  });
//});
//
//function sendCode() {
//  var email = document.getElementById("email").value;
//
//
//}