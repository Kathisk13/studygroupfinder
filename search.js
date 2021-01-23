function closeModal() {
    document.getElementById("waitForAcceptance").style.display = "none";
    document.getElementById("searchModal").style.display = "none";
    document.getElementById("groupdetails").style.display = "none";
    document.getElementById("neuegruppe").style.display = "none";
    document.getElementById("einstellung").style.display = "none";
}

function closeChat(){
    document.getElementById("neuerchat").style.display = "none";
}
function enterSearch(event) {
    console.log("key pressed: " + event);
    if (event.key == "Enter" || event.which == 13 || event.keyCode == 13) {
        event.preventDefault();
        showSearch();
    }
}

function showSearch() {
    filterSearch(document.getElementById("searchTerm").value);
    document.getElementById("searchModal").style.display = "block";
}

function showmodal() {
    console.log("hi");
    document.getElementById("myModal").style.display = "block";
}

function filterSearch(term) {
    var results = document.getElementsByClassName("searchName");
    var any = false;
    for (let i = 1; i < results.length; i++) {
        var result = results[i].childNodes[1].innerHTML;
        termList = term.split(" ");
        var found = false;
        for (var j = 0; j < termList.length; j++) {
            if (result.toLowerCase().includes(termList[j].toLowerCase())) {
                results[i].parentNode.style.display = "flex";
                found = true;
                any = true;
            }
        }
        if (found == false) {
            results[i].parentNode.style.display = "none";
        }
    }
    if (any == false) {
        document.getElementById("resultList").innerHTML = "<p> Leider gab es zu deinem Suchbegriff keinen Treffer. Du kannst aber selber eine Gruppe erstellen</p>"
    }
}