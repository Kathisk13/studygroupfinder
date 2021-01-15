function beitreten(groupName) {
    document.getElementById("groupName").innerHTML = groupName;
    document.getElementById("waitForAcceptance").style.display = "block";
    document.getElementById("searchModal").style.display = "none";
}

function closeModal() {
    document.getElementById("waitForAcceptance").style.display = "none";
    document.getElementById("searchModal").style.display = "none";
    document.getElementById("groupdetails").style.display = "none";
}
function enterSearch(event) {
    console.log("key pressed: " + event);
    if (event.key == "Enter" || event.which == 13 || event.keyCode == 13) {
        event.preventDefault();
        showSearch();
    }
}

function showSearch() {
    console.log("show search");
    document.getElementById("searchModal").style.display = "block";
}

function showmodal() {
    console.log("hi");
    document.getElementById("myModal").style.display = "block";
}

function showDetails(subject) {
    document.getElementById("groupTitel").innerHTML = subject;
    document.getElementById("groupdetails").style.display = "block"
}