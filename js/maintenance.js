var complaintInput;
var roomInput;

var listItems = [];
var database;

function setup(){

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

database = firebase.database();
complaintInput = select('#complaint');
roomInput = select('#room');

  var submit = select('#submit');
  submit.mousePressed(sendToFirebase);
}

function sendToFirebase() {
  var complaints = database.ref('maintenance');
  var data = {
    complaint: complaintInput.value(),
    room: roomInput.value()
}
if(complaintInput.value() == ''){
  $("#noQuery").modal();
}
else{
  var complaint = complaints.push(data, finished);
  function finished(err) {
    if (err) {
      console.log("ooops, something went wrong.");
      console.log(err);
    } else {
      console.log('Data saved successfully');
    }
  }
}
}
