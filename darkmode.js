function setTheme() {
  console.log("cookie: " + getCookie("theme"));
  if (getCookie("theme") == "dark") {
    console.log("go to dark theme");
    document.documentElement.classList.add("dark-theme");
    console.log(document.body.classList);
  } else if (getCookie("theme") == "bright") {
    document.documentElement.classList.remove("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
  }
}
window.onload = setTheme;