// var head = document.getElementsByTagName('HEAD')[0];
//
// var link = document.createElement('link');
//
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = '../css/mainDash.css';
// head.appendChild(link);

// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = '../css/mainDashcss';
// head1.appendChild(link);


var complaintInput;
var roomInput;
var deleteBtn;

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

const auth = firebase.auth();
const db = firebase.firestore();

database = firebase.database();
deleteBtn = select('#deleteBtn');

  loadFirebase();
}


function loadFirebase() {
  var ref = database.ref("maintenance");
  ref.on("value", gotData, errData);
}


function errData(error) {
  console.log("Something went wrong.");
  console.log(error);
}
function gotData(data) {
  var complaints = data.val();

  var keys = Object.keys(complaints);
  var serial = 0;
  clearList();

  var list = createElement('tr');
  list.parent('data');

  for (var i = 0; i < keys.length; i++) {
    serial = serial + 1;
    var key = keys[i];
    var complaint = complaints[key];
    $("#data").append("<tr><td>" + serial + "</td><td>" + complaint.room + "</td><td>" + complaint.complaint + "</td><td><button id='deleteBtn' class='btn btn-outline-danger btn-md'>Delete</button></td></tr>");
}

function clearList() {
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].remove();
  }
}
}
