const adminForm = document.querySelector('.admin-form');
adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const adminEmail = document.querySelector('#admin-email').value;
  const addAdminRole = functions.httpsCallable('addAdminRole');
  addAdminRole({ email: adminEmail }).then(result => {
    console.log(result);
  });
});

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


  for (var i = keys.length-1; i >= 0 ; i--) {
    serial = serial + 1;
    var key = keys[i];
    var complaint = complaints[key];
    $("#data").append("<tr><td>" + serial + "</td><td>" + complaint.room + "</td><td>" + complaint.complaint + "</td><td>" + complaint.Hours + ":" + complaint.Minutes + " " + complaint.Date + "-" + complaint.Month + "-" + complaint.Year + "</td><td><button class='btn btn-outline-danger btn-md' onclick=deleteBtn('"+key+"')>Delete</button></td></tr>");

}

function clearList() {
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].remove();
  }
}
}
