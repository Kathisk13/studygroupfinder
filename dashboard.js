function beitreten(groupName) {
    document.getElementById("groupName").innerHTML = groupName;
    document.getElementById("waitForAcceptance").style.display = "block";
    document.getElementById("searchModal").style.display = "none";
    document.getElementById("groupdetails").style.display = "none";
}

function createGroup(){

}

function showDetails(subject, member) {
    var groupButton = document.getElementById("groupButton");
    if(member == true) {
        groupButton.innerHTML = "Austreten";
        groupButton.onclick = function () { removeGroup(subject); };
    } else {
        groupButton.innerHTML = "Beitreten";
        groupButton.onclick = function () { beitreten(document.getElementById('groupTitel').innerHTML); };
    }
    document.getElementById("groupTitel").innerHTML = subject;
    document.getElementById("groupdetails").style.display = "block";
}

function removeGroup(group) {
    closeModal();
    if (confirm("Gruppenanfrage zurückziehen")) {
        var b = document.getElementById(group);
        b.parentNode.removeChild(b);
    }
}
