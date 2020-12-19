function checkCredentials(){
	if(getCookie("name") != document.getElementById("nameInput").value || getCookie("name") == ""){
		return false;
	}
	if(getCookie("passwort") != document.getElementById("passwordInput").value || getCookie("passwordInput") == ""){
		return false;
	}
	return true;
}

function login(ev){
	if(checkCredentials()){
		var pathname = window.location.pathname;
		window.location.href = pathname.substring(0, pathname.lastIndexOf("Register.html")) + "dashboard.html";
	}
	document.getElementById("nameInput").style.backgroundColor = "#f2acac";
	document.getElementById("passwordInput").style.backgroundColor = "#f2acac";
}

function darkmode_toggle(ev){
	document.getElementById("loginButton").classList.toggle("dark-button");
	document.getElementById("nameInput").classList.toggle("dark-FormInput");
	document.getElementById("nameLabel").classList.toggle("dark-FormLabel");
	document.getElementById("passwordInput").classList.toggle("dark-FormInput");
	document.getElementById("passwordLabel").classList.toggle("dark-FormLabel");
	document.body.classList.toggle("dark-body");
}