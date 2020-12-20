function login(ev){
	var pathname = window.location.pathname;
	window.location.href = pathname.substring(0, pathname.lastIndexOf("loginAuswahl.html")) + "login.html";
}

function register(ev){
	var pathname = window.location.pathname;
	window.location.href = pathname.substring(0, pathname.lastIndexOf("loginAuswahl.html")) + "register.html";
}

function websso(ev){
	var pathname = window.location.pathname;
	window.location.href = pathname.substring(0, pathname.lastIndexOf("loginAuswahl.html")) + "websso.html";
}

function change_theme(){
	document.getElementById("loginButton").classList.toggle("dark-button");
	document.getElementById("registerButton").classList.toggle("dark-button");
	document.getElementById("registerWebSSOButton").classList.toggle("dark-button");
	document.body.classList.toggle("dark-body");
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