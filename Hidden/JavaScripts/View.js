const queryString = window.location.search;
const q = new URLSearchParams(queryString).get("q");

window.onload = function () {
  if (!q) {
    load(SearchPage);
  }
}

function loadPage() {
  if (q == atob(q1)) {
    load(pg1);
  }
  
  var url = document.location.href;
  window.history.pushState({}, "", url.split("?")[0]);
};

function load (string) {
  $("#loader").load(atob(string));
}
