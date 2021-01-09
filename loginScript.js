function checkCredentials(){
	// console.log(getCookie("name")+"|"+getCookie("passwort")+"|"+getCookie("fach")+"|"+getCookie("ort"));
	// console.log(document.getElementById("nameInput").value);
	// console.log(document.getElementById("passwordInput").value);
	if(getCookie("name") != document.getElementById("nameInput").value){
		return false;
	}
	if(getCookie("passwort") != document.getElementById("passwordInput").value){
		return false;
	}
	return true;
}

function login(ev){
	if(checkCredentials()){
		var pathname = window.location.pathname;
		window.location.href = pathname.substring(0, pathname.lastIndexOf("Register.html")) + "dashboard.html";
	}else{
		document.getElementById("nameInput").style.animationName = "falseCredentials";
		document.getElementById("passwordInput").style.animationName = "falseCredentials";
		document.getElementById("infoDiv").style.display = "inherit";
	}
}

function redirectRegister(ev){
	console.log("redirect...");
	var pathname = window.location.pathname;
	window.location.href = pathname.substring(0, pathname.lastIndexOf("Register.html")) + "Register.html";
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
	document.getElementById("registerLink").classList.toggle("dark-RegisterLabel");
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