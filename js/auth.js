
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
  e.preventDefault();

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    signupForm.reset();
  });
});

//logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut().then(() => {
//     console.log('USER SIGNED OUT');
//   });
// });
//
// const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//
//   const email = loginForm['login-email'].value;
//   const password = loginForm['login-password'].value;
//
//   auth.signInWithEmailAndPassword(email, password).then(cred => {
//     console.log(cred.user);
//     loginForm.reset();
//   })
// })