function redirect(ev){
	setCookie("name", "WebSSO-User", COOKIE_EXPIRE_HOURS);
	setCookie("passwort", "WebSSO-Passwort", COOKIE_EXPIRE_HOURS);
	setCookie("fach", "WebSSO-Fach", COOKIE_EXPIRE_HOURS);
	setCookie("ort", "WebSSO-Ort", COOKIE_EXPIRE_HOURS);
	var pathname = window.location.pathname;
	window.location.replace(pathname.substring(0, pathname.lastIndexOf("Register.html")) + "dashboard.html");
}