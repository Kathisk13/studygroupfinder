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

function darkmode_toggle(ev){
	document.getElementById("uploadImage").classList.toggle("dark-PicUploadButton");
	document.getElementById("nameInput").classList.toggle("dark-FormInput");
	document.getElementById("nameLabel").classList.toggle("dark-FormLabel");
	document.getElementById("passwordInput").classList.toggle("dark-FormInput");
	document.getElementById("passwordLabel").classList.toggle("dark-FormLabel");
	document.body.classList.toggle("dark-body");
	document.getElementById("register").classList.toggle("dark-RegisterButton");
	document.getElementById("fachInput").classList.toggle("dark-FormInput");
	document.getElementById("fachLabel").classList.toggle("dark-FormLabel");
	document.getElementById("ortInput").classList.toggle("dark-FormInput");
	document.getElementById("ortLabel").classList.toggle("dark-FormLabel");
}
