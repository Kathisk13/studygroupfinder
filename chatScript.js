function createMessageElement(text, member){
    var message = document.createElement('container');
    var pic = document.createElement('img');
    pic.src="https://freesvg.org/img/abstract-user-flat-4.png";
    pic.alt=member;
    var user = document.createElement('span');
    user.textContent=member;
    user.style.color = "blue";
    user.className="time-left";
    var txt = document.createElement('p');
    txt.innerHTML=text;
    var time = document.createElement('span');
    time.textContent="11:05";
    time.className="time-right";
    message.appendChild(pic);
    message.appendChild(user);
    message.appendChild(txt);
    message.appendChild(time);
    return message;
}

function createMessageUser(text, member){
    var message = document.createElement('darker');
    var pic = document.createElement('img');
    pic.src="https://th.bing.com/th/id/OIP.dd7FtogXVzIRU8Xavk3MUgAAAA?pid=Api&rs=1";
    pic.alt=member;
    pic.className="right";
    var user = document.createElement('span');
    user.textContent=member;
    user.style.color = "magenta";
    user.className="time-right";
    var txt = document.createElement('p');
    txt.innerHTML=text;
    var time = document.createElement('span');
    time.textContent="11:01";
    time.className="time-left";
    message.appendChild(pic);
    message.appendChild(user);
    message.appendChild(txt);
    message.appendChild(time);
    return message;
}


function sendMessage() {
    const message = document.getElementById('message').value;
    var messages = document.getElementById('chat');
    if (message == ''){
        return;
    }

    chat.appendChild(createMessageUser(message, "Bob"));
    chat.appendChild(createMessageElement("Hallo :-)", "Rosemarie"));
}

function sendMessageGroup() {
    const message = document.getElementById('message').value;
    var messages = document.getElementById('chat');
    if (message == ''){
        return;
    }

    chat.appendChild(createMessageUser(message, "Bob"));
    chat.appendChild(createMessageElement("Wilkommen in unserer Gruppe!", "Robbie"));
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