function checkBrowserSupport(){
	console.log("Checking Browser Support...");
	if(typeof(Storage) == "undefined"){
		window.alert("Your Browser is not supported!");
	}
}
window.onload = checkBrowserSupport();

function register(ev){
	setCookie("name", document.getElementById("nameInput").value, COOKIE_EXPIRE_HOURS);
	setCookie("passwort", document.getElementById("passwordInput").value, COOKIE_EXPIRE_HOURS);
	setCookie("fach", document.getElementById("fachInput").value, COOKIE_EXPIRE_HOURS);
	setCookie("ort", document.getElementById("ortInput").value, COOKIE_EXPIRE_HOURS);
	var pathname = window.location.pathname;
	window.location.replace(pathname.substring(0, pathname.lastIndexOf("Register.html")) + "dashboard.html");
}

var profilePic = null;

function uploadPic(ev){
	var input = document.createElement("input");
	input.visibility = "hidden";
	input.type = "file";
	input.accept = "image/png, image/jpeg";
	input.id = "pic-input";
	input.click();
	input.onchange = function(){
		profilePic = URL.createObjectURL(input.files[0]);
		document.getElementById("ProfilePic").src = profilePic;
		input.remove();
	}
}
