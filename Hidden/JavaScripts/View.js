const queryString = window.location.search;
const q = new URLSearchParams(queryString).get("q");

window.onload = function () {
  if (q == atob("QWtybw==")) {
    load("QWtyby5odG1s");
  }
  var url = document.location.href;
  window.history.pushState({}, "", url.split("?")[0]);
};

function load (string) {
  $("#page").load(atob(string));
}