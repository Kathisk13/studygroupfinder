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
	if(profilePic) setCookie("bild", profilePic);
    input.remove();
  };
}

function getInfo(){
  document.getElementById("nameInput").placeholder = getCookie('name');
  document.getElementById("fachInput").placeholder = getCookie('fach');
  document.getElementById("ortInput").placeholder = getCookie('ort');
  document.getElementById("hobbyInput").placeholder = getCookie('hobby');
  if(getCookie("bild")) document.getElementById("ProfilePic").src = getCookie("bild");
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
    errorEl.innerHTML = "Du musst dir ein neues Passwort aussuchen";
    errorEl.style.display = "visible";
  } else {
    console.log("password: " + newPassword.value + "cookie: " + getCookie("passwort"))
    setCookie("passwort", newPassword.value);
    document.getElementById("newPasswordInput").addEventListener("animationiteration", function () {
      document.getElementById("newPasswordInput").style.animationPlayState = "paused";
    });
    document.getElementById("newPasswordInput").style.animation = "inputChanged 2s linear 0s infinite normal running";
    oldPassword.value = "";
    newPassword.value = "";
    errorEl.innerHTML = "Passwort wurde erfolgreich geändert";
    errorEl.style.visibility = "visible";
  }
}

function change(value){
  var input = document.getElementById(value + "Input").value;
  if(input != "") {
    setCookie(value, input);
    document.getElementById(value + "Input").addEventListener("animationiteration", function () {
      document.getElementById(value + "Input").style.animationPlayState = "paused";
    });
    document.getElementById(value + "Input").style.animation = "inputChanged 2s linear 0s infinite normal running";
  }
}

function updateInfo() {
  change('name');
  change('fach');
  change('ort');
  change('hobby');
  if(document.getElementById("oldPasswordInput").value != ""){
    changePassword();
  }
}
function createTimeTable() {
  for (var i = 0; i < 24; i++) {
    row = document.getElementById("timeTable").insertRow();
    for (var j = 0; j < 7; j++) {
      let cell = row.appendChild(document.createElement("td"));
      var string = (i + 1) + ":00 Uhr";
      let text = document.createTextNode(string);
      cell.appendChild(text);
      cell.className = "timeTable";
      cell.addEventListener("click", function (event) {
        if (!this.style.backgroundColor) {
          this.style.backgroundColor = "#4fe870";
        } else {
          this.style.backgroundColor = "";
        }
      });
    }
  }
}
