function switchToSettings() {
    window.location = "settings.html";
  }

function switchToMain() {
    window.location = "dashboard.html";
}

function switchToMessages() {
    window.location = "chatOverview.html";
}

function switchToProfile() {
    window.location = "profile.html";
}

function switchToSearch() {
    window.location = "search.html";
}

function switchToChat() {
    window.location = "chat.html";
}

function switchTogroupChat(group) {
    switch(group) {
        case 1: {
            window.location = "chatProg.html";
            break;
        }
        case 2: {
            window.location = "chatET.html";
            break;
        }
        case 3: {
            window.location = "chatAna.html";
            break;        }
        case 4: {
            window.location = "chatLina.html";
            break;
        }
        case 5: {
            window.location = "chatGDS.html";
            break;
        }
        default: {
            window.location = "dashboard.html";
            break;
        }
    }
}