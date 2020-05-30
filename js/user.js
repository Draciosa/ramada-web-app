var firebaseConfig = {
  apiKey: "AIzaSyByiBVICDzwtgKCH7_UAvNEyGsal2yCGVM",
  authDomain: "ramada-experiment-1.firebaseapp.com",
  databaseURL: "https://ramada-experiment-1.firebaseio.com",
  projectId: "ramada-experiment-1",
  storageBucket: "ramada-experiment-1.appspot.com",
  messagingSenderId: "220214697552",
  appId: "1:220214697552:web:a39a886a09f8221c453b55",
  measurementId: "G-BPMGEX75ET"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const  unique = document.getElementById("uniqueId");
const  username = document.getElementById("username");
const  email = document.getElementById("email");
const  password = document.getElementById("password");
const  confirmPassword = document.getElementById("confirmPassword");
const  signupBtn = document.getElementById("signupBtn");

const database = firebase.database();

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  database.ref('/User/'+ unique.value).set({
    Email: email.value,
    User_Name: username.value,
    Password: password.value
  })
})
