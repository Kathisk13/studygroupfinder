function checkBrowserSupport(){
	console.log("Checking Browser Support...");
	if(typeof(Storage) == "undefined"){
		window.alert("Your Browser is not supported!");
	}
}

function createTimeTable(){
	for(var i = 0; i < 24; i++){
		row = document.getElementById("timeTable").insertRow();
		for(var j = 0; j < 7; j++){
			let cell = row.appendChild(document.createElement("td"));
			var string = (i+1)+":00 Uhr"
			let text = document.createTextNode(string);
			cell.appendChild(text);
			cell.className = "timeTable";
			cell.addEventListener("click", function(event){
				if(!this.style.backgroundColor){
					this.style.backgroundColor = "#4fe870";
				}else{
					this.style.backgroundColor = "";
				}
			});
		}
	}
}

function register(ev){
	var accept = true;
	if(document.getElementById("nameInput").value.length < 2){
		document.getElementById("nameInput").addEventListener("animationiteration", function(){
			document.getElementById("nameInput").style.animationPlayState = "paused";
		});
		document.getElementById("nameInput").style.animation = "falseCredentials 2s linear 0s infinite normal running";
		accept = false;
	}
	if(document.getElementById("passwordInput").value.length < 8){
		document.getElementById("passwordInput").addEventListener("animationiteration", function(){
				document.getElementById("passwordInput").style.animationPlayState = "paused";
		});
		document.getElementById("passwordInput").style.animation = "falseCredentials 2s linear 0s infinite normal running";
		return;
	}
	if(!accept) return;
	setCookie("name", document.getElementById("nameInput").value, COOKIE_EXPIRE_HOURS);
	setCookie("passwort", document.getElementById("passwordInput").value, COOKIE_EXPIRE_HOURS);
	setCookie("fach", document.getElementById("fachInput").value, COOKIE_EXPIRE_HOURS);
	setCookie("ort", document.getElementById("ortInput").value, COOKIE_EXPIRE_HOURS);
	var pathname = window.location.pathname;
	window.location.href = pathname.substring(0, pathname.lastIndexOf("Register.html")) + "dashboard.html";
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
		setCookie("bild", profilePic);
		input.remove();
	}
}

function change_theme(){
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
	document.getElementById("hobbyInput").classList.toggle("dark-FormInput");
	document.getElementById("hobbyLabel").classList.toggle("dark-FormLabel");
	var tdelements = document.getElementsByTagName("td");
	for(var i = 0; i < tdelements.length; i++){
		tdelements[i].classList.toggle("dark-timeTable");
	}
	var thelements = document.getElementsByTagName("th");
	for(var i = 0; i < thelements.length; i++){
		thelements[i].classList.toggle("dark-timeTable");
	}
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

window.onload = function(ev){
	checkBrowserSupport();
	createTimeTable();
	checkTheme();
};