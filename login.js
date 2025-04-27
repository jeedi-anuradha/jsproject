// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbi9uPTie3mPIJjmSaQXrZ4cZJvcL1rVQ",
  authDomain: "login-8f3cc.firebaseapp.com",
  projectId: "login-8f3cc",
  storageBucket: "login-8f3cc.firebasestorage.app",
  messagingSenderId: "594850633279",
  appId: "1:594850633279:web:e7ef95db21806e7c478a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//submit button
const submit = document.getElementById('login')
submit.addEventListener('click', function (event) {
  event.preventDefault();
  //Inputs
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('login success')
      window.location.href='index.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

})

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none"; // Hide the loader
});

function validateForm(event) {
  // Prevent form submission by default
  event.preventDefault();

  // Get the values from the form fields
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;

  // Clear previous error messages
  document.getElementById('username-error').innerText = '';
  document.getElementById('password-error').innerText = '';

  // Validate Username (Ensure it's not empty and matches a basic email pattern)
  if (username === '') {
      document.getElementById('username-error').innerText = 'Username cannot be empty.';
      isValid = false;
  } else if (!validateEmail(username)) {
      document.getElementById('username-error').innerText = 'Please enter a valid email.';
      isValid = false;
  }

  // Validate Password (Ensure it's not empty and meets a minimum length)
  if (password === '') {
      document.getElementById('password-error').innerText = 'Password cannot be empty.';
      isValid = false;
  } else if (password.length < 6) {
      document.getElementById('password-error').innerText = 'Password must be at least 6 characters long.';
      isValid = false;
  }

  // If form is valid, submit the form
  if (isValid) {
      document.getElementById('login-form').submit();
  }
}

// Function to validate email pattern
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}
