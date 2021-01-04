var timer = 10;

function createMessageElement(text, member){
    var message = document.createElement('darker');
    message.className = 'darker';
    var pic = document.createElement('img');
    pic.src="https://freesvg.org/img/abstract-user-flat-4.png";
    pic.alt=member;
    pic.className = "profilepic";
    var user = document.createElement('span');
    user.textContent=member;
    user.style.color = "blue";
    user.className="time-left";
    var txt = document.createElement('p');
    txt.innerHTML=text;
    var time = document.createElement('span');
    time.textContent="11:" + timer;
    time.className="time-right";
    message.appendChild(pic);
    message.appendChild(user);
    message.appendChild(txt);
    message.appendChild(time);
    timer = timer + 1;
    return message;
}

function createMessageUser(text, member){
    var message = document.createElement('darker');
    message.className = 'darker';
    var pic = document.createElement('img');
    pic.src="https://freesvg.org/img/abstract-user-flat-4.png";
    pic.alt=member;
    pic.className="right profilepic";
    var user = document.createElement('span');
    user.textContent=member;
    user.style.color = "magenta";
    user.className="time-right";
    var txt = document.createElement('p');
    txt.innerHTML=text;
    var time = document.createElement('span');
    time.textContent="11:"+timer;
    time.className="time-left";
    message.appendChild(pic);
    message.appendChild(user);
    message.appendChild(txt);
    message.appendChild(time);
    timer = timer + 1;
    return message;
}


function sendMessage() {
    if (timer >= 60) timer = 10;
    var message = document.getElementById('message').value;
    var messages = document.getElementById('chat');
    if (message == ''){
        return;
    }

    messages.appendChild(createMessageUser(message, "Bob"));
    setTimeout(response("Hallo Bob :)", "Rosemarie"), 10000);
}

function response(message, user){
    var messages = document.getElementById('chat');
    messages.appendChild(createMessageElement(message, user));
}

function sendMessageGroupe(user) {
    if (timer >= 60) timer = 10;
    var message = document.getElementById('message').value;
    var messages = document.getElementById('chat');
    if (message == ''){
        return;
    }

    messages.appendChild(createMessageUser(message, "Bob"));
    setTimeout(response("Wilkommen in unserer Gruppe!", user), 10000);
}

function switchToSettings() {	
    window.location = "settings.html";
}

function switchToMain() {
    window.location = "dashboard.html";
}

function switchToProfile() {
    window.location = "profile.html";
}
function switchToMessages() {
    window.location = "chatOverview.html";
}
function switchToChat() {
    window.location = "chat.html";
}
function switchTogroupeChat(groupe) {
    if (groupe==1) window.location = "Prog1Chat.html";
    if (groupe==2) window.location = "ETechnikChat.html";
    if (groupe==3) window.location = "AnalysisAChat.html";
    if (groupe==4) window.location = "LinaAChat.html";
    if (groupe==5) window.location = "GDSChat.html";
}