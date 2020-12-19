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

function darkmode_toggle(ev){
	document.getElementById("loginButton").classList.toggle("dark-button");
	document.getElementById("registerButton").classList.toggle("dark-button");
	document.getElementById("registerWebSSOButton").classList.toggle("dark-button");
	document.body.classList.toggle("dark-body");
}