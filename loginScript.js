function checkCredentials(){
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
		window.location.replace(pathname.substring(0, pathname.lastIndexOf("Register.html")) + "dashboard.html");
	}
	document.getElementById("nameInput").style.backgroundColor = "#f2acac";
	document.getElementById("passwordInput").style.backgroundColor = "#f2acac";
}