auth.onAuthStateChanged(user =>{
  if(user){
    }
  else{
  }
});

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
  e.preventDefault();

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const conPassword = signupForm['signup-confirm-password'].value;

if(email.length == 0 && password.length == 0){
  $("#provideCreds").modal();
}
else if(email.length == 0){
  $("#noEmail").modal();
}
else if(password.length == 0){
  $("#givePassword").modal();
}
else if(password == conPassword){

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    $("#successfullySignedIn").modal();
    send_verification();
    signupForm.reset();
  });
}

else {
  $("#noPassword").modal();
  signupForm.reset();
}

});
function send_verification(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function(){

  }).catch(function(error){

  });
}
