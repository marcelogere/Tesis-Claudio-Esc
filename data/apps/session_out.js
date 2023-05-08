function logoutButton() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/logout", true);
  xhr.send();
  setTimeout(function(){ window.open("../","_self"); }, 1000);
}

window.addEventListener("beforeunload", function (e) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "logout", true);
  xhr.send();
});