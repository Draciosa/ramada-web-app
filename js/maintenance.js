var complaintInput;
var roomInput;
var _hours;
var _year;
var _month;
var _minutes;
var _date;
var _status;

const h = new Date().getHours();
const y = new Date().getFullYear();
const mo =  new Date().getMonth() + 1;
const da = new Date().getDate();
const mi = new Date().getMinutes();
const s = 'Pending';

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
_hours = h;
_minutes = mi;
_date = da;
_month = mo;
_year = y;
_status = s;


  var submit = select('#submit');
  submit.mousePressed(sendToFirebase);
}

function sendToFirebase() {
  var complaints = database.ref('maintenance');
  var data = {
    complaint: complaintInput.value(),
    room: roomInput.value(),
    Hours: _hours,
    Minutes: _minutes,
    Date: _date,
    Month: _month,
    Year: _year,
    Status: _status
}
if(complaintInput.value() == ''){
  $("#noQuery").modal();
}
else{
  var complaint = complaints.push(data, finished);
  $("#submitQuery").modal();
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
