function login(ev){
	var pathname = window.location.pathname;
	window.location.replace(pathname.substring(0, pathname.lastIndexOf("loginAuswahl.html")) + "login.html");
}

function register(ev){
	var pathname = window.location.pathname;
	window.location.replace(pathname.substring(0, pathname.lastIndexOf("loginAuswahl.html")) + "register.html");
}

function websso(ev){
	var pathname = window.location.pathname;
	window.location.replace(pathname.substring(0, pathname.lastIndexOf("loginAuswahl.html")) + "websso.html");
}