function uploadPic(ev) {
  var input = document.createElement("input");
  input.visibility = "hidden";
  input.type = "file";
  input.accept = "image/png, image/jpeg";
  input.id = "pic-input";
  input.click();
  input.onchange = function () {
    profilePic = URL.createObjectURL(input.files[0]);
    document.getElementById("ProfilePic").src = profilePic;
    input.remove();
  };
}

function getInfo(){
  document.getElementById("nameInput").value = getCookie('name');
  document.getElementById("fachInput").value = getCookie('fach');
  document.getElementById("ortInput").value = getCookie('ort');
}
function changePassword() {
  var oldPassword = document.getElementById("oldPasswordInput");
  var newPassword = document.getElementById("newPasswordInput");
  var errorEl = document.getElementById("errorOldPass");
  console.log(oldPassword.value + " :old password")
  if (oldPassword.value != getCookie("passwort")) {
    errorEl.innerHTML = "Das war wohl das falsche Passwort, probier's nochmal";
    console.log("please show error message");
    errorEl.style.visibility = "visible";
  } else if(newPassword == "") {
    console.log("Im confused, but this should show with no password")
    errorEl.innerHTML = "Du musst dir ein neues Passwort aussuchen";
    errorEl.style.display = "visible";
  } else {
    console.log("password: " + newPassword.value + "cookie: " + getCookie("passwort"))
    setCookie("passwort", newPassword.value);
    oldPassword.value = "";
    newPassword.value = "";
    errorEl.innerHTML = "Passwort wurde erfolgreich geändert";
    errorEl.style.visibility = "visible";
  }
}

function change(value){
  var input = document.getElementById(value + "Input").value;
  setCookie(value, input);
}

function updateInfo() {
  change('name');
  change('fach');
  change('ort');
  console.log(document.getElementById("newPasswordInput").value)
  if(document.getElementById("oldPasswordInput").value != ""){
    changePassword();
  }
}