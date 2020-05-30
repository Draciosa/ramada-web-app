fucntion checkforblank(){
  if (document.getElementById("username").value == ""){
    alert.("Please enter username");
    document.getElementById("username").style.bordercolor = "red";
    return false;
  }
  if (document.getElementById('uniqueId').value == ""){
    alert.('Please enter username');
    document.getElementById('uniqueId').style.bordercolor = "red";
    return false;
  }
  if (document.getElementById('email').value == ""){
    alert.('Please enter username');
    document.getElementById('email').style.bordercolor = "red";
    return false;
  }
  if (document.getElementById('password').value == ""){
    alert.('Please enter username');
    document.getElementById('password').style.bordercolor = "red";
    return false;
  }
  if (document.getElementById('confirmPassword').value == ""){
    alert.('Please enter username');
    document.getElementById('confirmPassword').style.bordercolor = "red";
    return false;
  }
}
