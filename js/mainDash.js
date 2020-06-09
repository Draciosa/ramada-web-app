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
  var serial = 0;
  var completedNum = 0;
  var pendingNum = 0;
  var colourId = '';


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
  // var serial = 0;
  clearList();

  var list = createElement('tr');
  list.parent('data');


  for (var i = keys.length-1; i >= 0 ; i--) {
    serial = serial + 1;
    var key = keys[i];
    var complaint = complaints[key];
    if(complaint.Status == 'Pending'){
      colourId = 'red';
    }
    if(complaint.Status == 'Completed'){
      colourId = 'green';
    }
    $("#data").append("<tr><td>" + serial + "</td><td>" + complaint.room + "</td><td>" + complaint.complaint + "</td><td>" + complaint.Hours + ":" + complaint.Minutes + " " + complaint.Date + "-" + complaint.Month + "-" + complaint.Year + "</td><td style='background-color:"+colourId+";'>" + complaint.Status + "</td><td><button class='btn btn-outline-danger btn-md' onclick=deleteBtn('"+key+"') style='margin-right:15px;'>Delete</button><button class='btn btn-outline-success btn-md' onclick=updateBtn('"+key+"')>Update</button></td></tr>");
    if(complaint.Status == 'Pending'){
      pendingNum = pendingNum + 1;
    }
    if(complaint.Status == 'Completed'){
      completedNum = completedNum + 1;
    }

}

getPendingValues(serial, pendingNum, completedNum);


function clearList() {
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].remove();
  }
}
}


function getCompletedValues(serial,completedNum){
  var finalCompletedNum = completedNum/serial;
$("#dynamic_completed_data").append("<div class='round1' data-value = '"+finalCompletedNum+"' data-size = '250' data-thickness = '10'><strong></strong><div class='card-body'><h3>Completed</h3></div></div>");
Circlle1('.round1');

function Circlle1(el){
$(el).circleProgress({fill:{color:'#ff5c5c'}}).on('circle-animation-progress', function(event,progress,stepValue){
$(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
});
};
}

function getPendingValues(serial, pendingNum, completedNum){
  getCompletedValues(serial, completedNum);

  var finalPendingNum = pendingNum/serial;
  $("#dynamic_pending_data").append("<div class='round' data-value = '"+finalPendingNum+"' data-size = '250' data-thickness = '10'><strong></strong><div class='card-body'><h3>Pending</h3></div></div>");
  Circlle('.round');

  function Circlle(el){
  $(el).circleProgress({fill:{color:'#ff5c5c'}}).on('circle-animation-progress', function(event,progress,stepValue){
  $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
  });
  };
}
