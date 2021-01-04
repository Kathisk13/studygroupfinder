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
  if (oldPassword.value != getCookie("passwort")) {
    errorEl.innerHTML = "Das war wohl das falsche Passwort, probier's nochmal";
    errorEl.style.display = "inline";
  } else if(newPassword == "") {
    errorEl.innerHTML = "Du musst dir ein neues Passwort aussuchen";
    errorEl.style.display = "inline";
  } else {
    setCookie("passwort", newPassword);
    oldPassword.value = "";
    newPassword.value = "";
    errorEl.style.display = "none";
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
  if(document.getElementById("newPasswordInput").value != ""){
    changePassword();
  }
}