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

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();


auth.onAuthStateChanged(user =>{
  if(user){
    document.getElementById("logged_in").style.display = "block";
    document.getElementById("log_in").style.display = "none";

  }
  else{
  document.getElementById("logged_in").style.display = "none";
  document.getElementById("log_in").style.display = "block";
  }
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  if(email.length == 0 && password.length == 0){
    $("#provideCreds").modal();
  }
  else if(email.length == 0){
    $("#noEmail").modal();
  }
  else if(password.length == 0){
    $("#givePassword").modal();
  }
  else{

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    loginForm.reset();
  });
}

});
