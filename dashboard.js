function beitreten(groupName) {
    document.getElementById("groupName").innerHTML = groupName;
    document.getElementById("waitForAcceptance").style.display = "block";
    document.getElementById("searchModal").style.display = "none";
    document.getElementById("groupdetails").style.display = "none";
    document.getElementById(groupName).style.display = "block";
    setTimeout(function checkLocation() {
        document.getElementById(groupName).children[2].style.display = "none";
    }, 5000);
}

function createGroup(){
    document.getElementById("neuegruppe").style.display = "block";
}

function createChat(){
    document.getElementById("neuerchat").style.display = "block";
}

function openSettings() {
    document.getElementById("einstellung").style.display = "block";
}

function showDetails(subject, member, size) {
    var groupButton = document.getElementById("groupButton");
    if(member == true) {
        groupButton.innerHTML = "Austreten";
        groupButton.onclick = function () { removeGroup(subject); };
    } else {
        groupButton.innerHTML = "Beitreten";
        groupButton.onclick = function () { beitreten(document.getElementById('groupTitel').innerHTML); };
    }
    document.getElementById("groupTitel").innerHTML = subject;
    document.getElementById("groupSize").innerHTML = size;
    document.getElementById("groupdetails").style.display = "block";
}

function removeGroup(group) {
    closeModal();
    
    if (confirm("Möchtest du die Gruppe " + group +" wirklich verlassen?")) {
        var b = document.getElementById(group);
        b.parentNode.removeChild(b);
    }
}
