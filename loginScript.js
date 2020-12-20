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
	document.getElementById("infoDiv").style.display = "inherit";
}

function change_theme(){
	document.getElementById("loginButton").classList.toggle("dark-button");
	document.getElementById("nameInput").classList.toggle("dark-FormInput");
	document.getElementById("nameLabel").classList.toggle("dark-FormLabel");
	document.getElementById("passwordInput").classList.toggle("dark-FormInput");
	document.getElementById("passwordLabel").classList.toggle("dark-FormLabel");
	document.body.classList.toggle("dark-body");
	document.getElementById("infoDiv").classList.toggle("dark-InfoDiv");
	document.getElementById("infoLabel").classList.toggle("dark-FormLabel");
}

function darkmode_toggle(ev){
	change_theme();
	if(getCookie("theme") == "dark"){
		setCookie("theme", "bright", COOKIE_EXPIRE_HOURS);
	}else if(getCookie("theme") == "bright"){
		setCookie("theme", "dark", COOKIE_EXPIRE_HOURS);
	}else{
		setCookie("theme", "dark", COOKIE_EXPIRE_HOURS);
	}
}

function checkTheme(){
	if(getCookie("theme") == "dark"){
		change_theme();
	}
	console.log("Checking theme...");
}
window.onload = checkTheme();