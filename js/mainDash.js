var complaintInput;
var roomInput;
var deleteBtn;

var listItems = [];
var database;

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
