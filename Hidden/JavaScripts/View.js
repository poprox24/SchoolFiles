const queryString = window.location.search;
const q = new URLSearchParams(queryString).get("q");

function loadPage() {
  if (q == atob("QWtybw==")) {
    load("QWtyby5odG1s");
  } else {
    $("#loader").load(atob("QWZ0ZXJsb2dpbi5odG1s"));
  }
  var url = document.location.href;
  window.history.pushState({}, "", url.split("?")[0]);
};

function load (string) {
  $("#loader").load(atob(string));
}